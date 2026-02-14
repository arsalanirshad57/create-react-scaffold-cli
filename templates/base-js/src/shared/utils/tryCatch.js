export const tryCatch = (fn, ...args) => {
  try {
    const result = fn(...args);

    if (result instanceof Promise) {
      return result.then((result) => [null, result]).catch((error) => [error, null]);
    }

    return [null, result];
  } catch (error) {
    return [error, null];
  }
};
