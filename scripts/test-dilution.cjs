const assert = require("node:assert/strict");
const fs = require("node:fs");
const ts = require("typescript");
const Module = require("node:module");
const source = ts.transpileModule(fs.readFileSync("libs/dilution.ts", "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText;
const loaded = new Module("dilution-test");
loaded._compile(source, "dilution-test.js");
const { calculateDilution: calc, DILUTION_RATIOS } = loaded.exports;
assert.deepEqual(calc(50, "5", "l"), {
  productMl: 100,
  waterMl: 5000,
  totalMl: 5100,
});
assert.equal(calc(50, "500", "ml").productMl, 10);
assert.equal(calc(50, "0,5", "l").productMl, 10);
assert.equal(calc(50, "0.5", "l").productMl, 10);
for (const value of ["", "0", "-1", "abc", "5abc", "1,2,3", "Infinity", "1e9"])
  assert.equal(calc(50, value, "l"), null);
assert.equal(calc(0, "5", "l"), null);
assert.equal(calc(12, "5", "l"), null);
assert.equal(calc(50, "5", "invalid"), null);
for (const ratio of DILUTION_RATIOS)
  assert.ok(
    Math.abs(
      calc(ratio, "2", "l").productMl - calc(ratio, "2000", "ml").productMl,
    ) < 1e-10,
  );
console.log(
  "Diluição: proporções, L/ml, vírgula, volume final e entradas inválidas aprovados.",
);
