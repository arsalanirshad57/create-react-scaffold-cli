import { ComponentType, memo as reactMemo } from 'react';

/**
 * @template T
 * @param {React.ComponentType<T>} Component
 * @returns {React.MemoExoticComponent<React.ComponentType<T>>}
 */

export const memo = <T extends object>(Component: ComponentType<T>) => reactMemo(Component);
