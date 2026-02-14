export const parseString = (value) => {
  const fallback = '';
  if (!value) return fallback;
  const isString = typeof value === 'string';
  if (!isString) return fallback;
  return value;
};

export const parseArray = (value) => {
  const fallback = [];
  if (!value) return fallback;
  const isArray = Array.isArray(value);
  if (!isArray) return value;
  return value;
};

export const parseNumberForValidator = (value) => {
  const fallback = '';
  if (!value) return fallback;
  const isNullish = value === undefined || value === null;
  if (isNullish) return fallback;
  const isValid = typeof value === 'number';
  if (!isValid) return fallback;
  return value;
};

export const parseJSON = (value) => {
  const fallback = {};
  if (!value) return fallback;
  const isNotValid = typeof value === 'string';
  if (isNotValid) return fallback;
  const isValid = typeof value === 'object';
  if (isValid) return value;

  try {
    const parsed = JSON.parse(value);
    return parsed;
  } catch {
    return fallback;
  }
};
