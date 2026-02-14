import React from 'react';

export const useDebounce = (value, delay) => {
  const [debounceValue, setDoebounceValue] = React.useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDoebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounceValue;
};
