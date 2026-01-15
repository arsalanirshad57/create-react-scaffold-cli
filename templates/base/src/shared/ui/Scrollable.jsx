import * as ScrollArea from '@radix-ui/react-scroll-area';
import { memo } from 'react';
import { cn } from '../libs';

/**
 * @typedef {object} ComponentProps
 * @property {'horizontal' | 'vertical'} [orientation]
 * @property {string} [className]
 * @property {string} [indicatorClassName]
 * @param {React.PropsWithChildren<ComponentProps>} props
 * @returns {JSX.Element}
 */

const Component = ({
  orientation = 'vertical',
  className,
  children,
  style,
  onClick,
  indicatorClassName,
  viewPortClassName,
}) => {
  return (
    <ScrollArea.Root
      className={cn('size-full overflow-hidden', className)}
      style={style}
      onClick={onClick}
    >
      <ScrollArea.Viewport className={cn('size-full overflow-hidden', viewPortClassName)}>
        {children}
      </ScrollArea.Viewport>

      <ScrollArea.Scrollbar
        orientation={orientation}
        className={cn(
          orientation === 'vertical' ? 'w-1 lg:w-1.5 2xl:w-2' : 'h-1 lg:h-1.5 flex flex-col',
          indicatorClassName
        )}
      >
        <ScrollArea.Thumb className="relative flex-1 rounded bg-gray-400/50 hover:bg-gray-800/50 transition-colors" />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner />
    </ScrollArea.Root>
  );
};

export const Scrollable = memo(Component);
