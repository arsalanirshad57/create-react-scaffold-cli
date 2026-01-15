import React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { FaChevronDown, FaChevronUp, FaCheck } from 'react-icons/fa6';
import { memo } from '../utils';
import { cn } from '../libs';

const SelectRoot = SelectPrimitive.Root;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      'flex w-full items-center justify-between whitespace-nowrap rounded-10rd border bg-transparent px-3 py-2.5 font-inter text-sm placeholder:!text-custom-grey-900 placeholder:!opacity-30 disabled:cursor-not-allowed disabled:bg-neutral-50 [&>span]:line-clamp-1',
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <FaChevronDown size={12} className="text-neutral-300" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    {...props}
  >
    <FaChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    {...props}
  >
    <FaChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef(
  ({ className, children, position = 'popper', ...props }, ref) => (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        className={cn(
          'relative z-[100] max-h-80 min-w-[8rem] font-inter overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 w-[var(--radix-select-trigger-width)]',
          position === 'popper' &&
            'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          className
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton className="text-secondary" />
        <SelectPrimitive.Viewport
          className={cn(
            'p-1',
            position === 'popper' &&
              'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] font-inter'
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton className="text-secondary" />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
);
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn('px-2 py-1.5 text-13fs font-semibold font-inter', className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex w-full cursor-pointer select-none items-center hover:bg-neutral-100 rounded-sm py-1.5 pl-2 pr-8 text-sm focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 outline-none',
      className
    )}
    {...props}
  >
    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <FaCheck className="h-4 w-4 text-secondary" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

/**
 *
 *
 * @template T
 * @typedef {object} ComponentProps
 * @property {string} [placeholder]
 * @property {T[]} values
 * @property {T | undefined} value
 * @property {(value: T) => string | number} getValueId
 * @property {(value: T) => React.ReactNode} getValueLabel
 * @property {(value: T) => void} onChange
 * @property {boolean} [fullWidth]
 * @property {'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'} [size]
 * @property {'sm' | 'rounded' | 'md' | 'lg' | 'xl' | 'full'} [radius]
 * @property {boolean} [disabled]
 * @property {string} [className]
 */

/**
 *
 *
 * @template T
 * @param {ComponentProps<T>} props
 * @returns {JSX.Element}
 */

const Component = ({
  placeholder = 'Seleccionar...',
  value,
  values,
  getValueId = ({ id }) => id,
  getValueLabel = ({ name }) => name,
  onChange,
  fullWidth,
  customOption,
  disabled,
  contentClass,
}) => {
  let id;
  if (value) {
    id = getValueId(value);
  }

  const valuesLookup = React.useMemo(
    () =>
      values.reduce((values, value) => {
        const id = getValueId(value);
        values[id] = value;
        return values;
      }, {}),
    [getValueId, values]
  );

  const onValueChange = React.useCallback(
    (id) => {
      const value = valuesLookup[id];
      onChange(value);
    },
    [onChange, valuesLookup]
  );

  return (
    <SelectRoot value={id} onValueChange={onValueChange} disabled={disabled}>
      <SelectTrigger
        className={cn(
          'outline-none bg-white',
          fullWidth ? 'w-full' : 'w-64',
          'data-placeholder:text-black/25'
        )}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className={contentClass}>
        {values.map((value, key) => {
          const id = getValueId(value);
          const label = getValueLabel(value);

          return (
            <SelectItem key={key} value={id}>
              {label}
            </SelectItem>
          );
        })}
        {customOption}
      </SelectContent>
    </SelectRoot>
  );
};

export const Select = memo(Component);
