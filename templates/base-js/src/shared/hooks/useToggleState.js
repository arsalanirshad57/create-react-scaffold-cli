import React from 'react';

export const useToggleState = () => {
  const [state, setState] = React.useState(false);

  const toggle = React.useCallback(() => {
    setState((v) => !v);
  }, []);

  return [state, toggle];
};
