export const tryCatch = async <T, E = Error>(
  fn: (...args: any[]) => Promise<T> | T,
  ...args: any[]
): Promise<[E | null, T | null]> => {
  try {
    const result = fn(...args);

    if (result instanceof Promise) {
      return result.then((res) => [null, res] as [null, T]).catch((error) => [error as E, null]);
    }

    return [null, result];
  } catch (error) {
    return [error as E, null];
  }
};
