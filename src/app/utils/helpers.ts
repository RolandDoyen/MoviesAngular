/** Converts a string to a float with comma-to-dot replacement, defaulting to 0. */
export function parseNumber(value: string | number): number {
  if (!value) return 0;
  const strValue = value.toString();
  const num = parseFloat(strValue.replace(",", "."));
  return isNaN(num) ? 0 : num;
}

/** Converts a string to an integer, defaulting to 0 on failure. */
export function parseIntOrZero(value: string | number): number {
  if (!value) return 0;
  const num = parseInt(value.toString());
  return isNaN(num) ? 0 : num;
}

/** Splits a comma-separated string into an array of trimmed non-empty values */
export function splitAndTrim(value: string): string[] {
  if (!value) return [];
  return value
    .split(",")
    .map(x => x.trim())
    .filter(x => x);
}

/** Joins an array into a comma-separated string */
export function joinArray(array: string[]): string {
  if (!array || !Array.isArray(array)) return "";
  return array.join(", ");
}