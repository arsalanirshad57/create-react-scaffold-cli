import React from 'react';

export const useBooleanState = () => {
  const [value, setValue] = React.useState(false);

  const toggle = React.useCallback(() => {
    setValue((v) => !v);
  }, []);

  const setToTrue = React.useCallback(() => {
    setValue(true);
  }, []);

  const setToFalse = React.useCallback(() => {
    setValue(false);
  }, []);

  return [value, setToTrue, setToFalse, toggle];
};
