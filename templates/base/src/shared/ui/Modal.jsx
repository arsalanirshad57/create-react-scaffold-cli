import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Scrollable } from './Scrollable';
import { cn } from '../libs';

/**
 * @typedef {object} ComponentProps
 * @property {boolean} isOpen
 * @property {() => void} onClose
 * @property {string} [className]
 * @param {React.PropsWithChildren & ComponentProps} props
 * @returns {JSX.Element}
 */

const Component = ({ isOpen, onClose, className, children }) => {
  const onOpenChange = React.useCallback(
    (isOpen) => {
      if (isOpen) return;
      onClose();
    },
    [onClose]
  );

  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/20  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content
          aria-describedby={undefined}
          className={cn(
            'fixed left-[50%] top-[50%] z-50 p-5 grid translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-2xl bg-white font-inter overflow-hidden',
            className
          )}
        >
          <Dialog.Title className="sr-only"></Dialog.Title>
          <Scrollable indicatorClassName="!w-1">{children}</Scrollable>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export const Modal = memo(Component);
