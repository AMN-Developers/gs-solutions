const assert = require("node:assert/strict");
const fs = require("node:fs");
const ts = require("typescript");
const Module = require("node:module");
const source = ts.transpileModule(
  fs.readFileSync("libs/wordpress.ts", "utf8"),
  {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
  },
).outputText;
const loaded = new Module("wordpress-test");
loaded._compile(source, "wordpress-test.js");
const api = loaded.exports;
let requested = "";
global.fetch = async (url) => {
  requested = url;
  return { ok: true, json: async () => [] };
};
(async () => {
  await api.getRelatedPosts({ id: 42, categories: [7, 9] });
  assert.match(requested, /per_page=3/);
  assert.match(requested, /exclude=42/);
  assert.match(requested, /categories=7,9/);
  assert.deepEqual(await api.getRelatedPosts({ id: 42, categories: [] }), []);
  await api.getPostBySlug("teste & outro");
  assert.match(requested, /slug=teste%20%26%20outro/);
  const schema = { description: "</script><script>alert(1)</script>" };
  assert.ok(!api.serializeSchema(schema).includes("</script>"));
  assert.deepEqual(JSON.parse(api.serializeSchema(schema)), schema);
  global.fetch = async () => ({ ok: false, status: 503 });
  await assert.rejects(api.getPosts(), /503/);
  console.log(
    "Blog: consultas, categorias, slug, falha do CMS e JSON-LD validados.",
  );
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
