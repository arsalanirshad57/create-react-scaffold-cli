import React from 'react';

/**
 * @template T
 * @param {React.ComponentType<T>} Component
 * @returns {React.MemoExoticComponent<React.FC<T>>}
 */

export const memo = (Component) => React.memo(Component);
