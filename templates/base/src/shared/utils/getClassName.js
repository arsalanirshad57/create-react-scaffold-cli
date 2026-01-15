export const getClassName = (prop, lookup) => {
  const isNullish = prop === undefined || prop === null;
  if (isNullish) return;
  return lookup[prop];
};
