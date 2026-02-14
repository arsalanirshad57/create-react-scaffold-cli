import { useCallback, useState } from 'react';

export const useToggleState = (initialValue: boolean = false): [boolean, () => void] => {
  const [state, setState] = useState(initialValue);

  const toggle = useCallback(() => {
    setState((v) => !v);
  }, []);

  return [state, toggle];
};
