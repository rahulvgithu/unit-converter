export const conversionTable: Record<string, [number, string]> = {
  league: [3, "mile"],
  mile: [1760, "yard"],
  furlong: [220, "yard"],
  yard: [3, "foot"],
  foot: [12, "inch"],
  inch: [2.54, "centimeter"],
  centimeter: [0.01, "meter"],
  meter: [1, "meter"],
};

export function convertToMeters(value: number, unit: string): number {
  while (unit !== "meter") {
    const entry = conversionTable[unit];

    if (!entry) {
      throw new Error("Unknown unit: ${unit}");
    }

    const [factor, nextUnit] = entry;

    value *= factor;
    unit = nextUnit;
  }

  return value;
}