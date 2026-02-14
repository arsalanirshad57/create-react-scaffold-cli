import { useCallback, useState } from 'react';

export const useBooleanState = (initialValue: boolean = false): [boolean, () => void, () => void, () => void] => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue((v) => !v);
  }, []);

  const setToTrue = useCallback(() => {
    setValue(true);
  }, []);

  const setToFalse = useCallback(() => {
    setValue(false);
  }, []);

  return [value, setToTrue, setToFalse, toggle];
};
