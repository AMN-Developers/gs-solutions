export const DILUTION_RATIOS = [400, 300, 200, 100, 50, 40, 30, 20, 10, 5];
export function parseWater(value: string) {
  const normalized = value.trim().replace(",", ".");
  return /^\d+(?:\.\d+)?$/.test(normalized) ? Number(normalized) : NaN;
}
// 1:N = uma parte de produto para N partes de água, não volume final.
export function calculateDilution(ratio: number, water: string, unit: string) {
  const amount = parseWater(water);
  if (
    !DILUTION_RATIOS.includes(ratio) ||
    !Number.isFinite(amount) ||
    amount <= 0 ||
    !["l", "ml"].includes(unit)
  )
    return null;
  const waterMl = amount * (unit === "l" ? 1000 : 1);
  const productMl = waterMl / ratio;
  const totalMl = waterMl + productMl;
  return Number.isFinite(totalMl) ? { productMl, waterMl, totalMl } : null;
}
