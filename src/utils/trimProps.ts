export function trimProps<T extends Record<string, any>>(obj: T): T {
  // Return early if null or not an object
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Handle arrays
  if (Array.isArray(obj)) {
    return obj.map((item: any) => trimProps(item)) as unknown as T;
  }

  // Create a new object to avoid mutating the original
  const result = { ...obj };

  for (const key in result) {
    const value: any = result[key];

    // Skip undefined values
    if (value === undefined) {
      continue;
    }

    if (value instanceof Date) {
      // Preserve Date objects as is
      result[key] = value as any;
    } else if (typeof value === "string") {
      // Trim strings
      result[key] = value.trim() as any;
    } else if (Array.isArray(value)) {
      // Recursively process arrays
      result[key] = value.map((item: any) => trimProps(item)) as any;
    } else if (value !== null && typeof value === "object") {
      // Recursively process nested objects
      result[key] = trimProps(value) as any;
    }
  }

  // Use type assertion for the entire result
  return result as T;
}
