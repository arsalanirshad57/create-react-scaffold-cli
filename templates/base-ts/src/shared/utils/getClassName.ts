export const getClassName = <T extends string | number | symbol>(
  prop: T | undefined | null, 
  lookup: Record<T, string>
): string | undefined => {
  const isNullish = prop === undefined || prop === null;
  if (isNullish) return undefined;
  return lookup[prop];
};
