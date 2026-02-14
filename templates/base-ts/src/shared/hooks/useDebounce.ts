import { useEffect, useState } from 'react';

export const useDebounce = <T>(value: T, delay: number): T => {
  const [debounceValue, setDoebounceValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDoebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounceValue;
};
