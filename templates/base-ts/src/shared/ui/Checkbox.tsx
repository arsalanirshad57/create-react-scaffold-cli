import { ComponentPropsWithRef, ReactNode, useId } from 'react';
import {
  sizeLookup,
  sizeMdLookup,
  sizeLgLookup,
  fontSizeLookup,
  fontSizeMdLookup,
  fontSizeLgLookup,
  fontWeightLookup,
  fontWeightMdLookup,
  fontWeightLgLookup,
} from '../theme';
import { getClassName, memo } from '../utils';
import { cn } from '../libs';
import { Responsive } from '../types/ui';

export type CheckboxSize = keyof typeof sizeLookup;
export type LabelFontSize = keyof typeof fontSizeLookup;
export type LabelFontWeight = keyof typeof fontWeightLookup;

export interface CheckboxProps extends Omit<ComponentPropsWithRef<'input'>, 'size'> {
  label?: ReactNode;
  labelClass?: string;
  checkClass?: string;
  size?: CheckboxSize | Responsive<CheckboxSize>;
  labelFontSize?: LabelFontSize | Responsive<LabelFontSize>;
  labelFontWeight?: LabelFontWeight | Responsive<LabelFontWeight>;
}

const Component = ({
  label,
  disabled = false,
  className = '',
  labelClass,
  checkClass,
  onChange,
  size = { base: 4, md: 5 } as any, // Default value type casting
  labelFontSize = { base: 'xs', md: 'sm', lg: 'base' } as any,
  labelFontWeight,
  ...rest
}: CheckboxProps) => {
  const id = useId();
  const s = size as any;
  const lfs = labelFontSize as any;
  const lfw = labelFontWeight as any;

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <input
        type="checkbox"
        disabled={disabled}
        onChange={onChange}
        className={cn(
          ' border border-tertiary checked:bg-primary accent-primary transition-colors duration-200',
          typeof size !== 'object' && getClassName(size, sizeLookup),
          disabled && 'cursor-not-allowed bg-opacity-60',
          getClassName(s?.base, sizeLookup),
          getClassName(s?.md, sizeMdLookup),
          getClassName(s?.lg, sizeLgLookup),
          checkClass
        )}
        id={id}
        {...rest}
      />
      <label
        htmlFor={id}
        className={cn(
          'text-secondary font-inter',
          disabled && 'opacity-50 cursor-not-allowed',
          typeof labelFontSize !== 'object' && getClassName(labelFontSize, fontSizeLookup),
          getClassName(lfs?.base, fontSizeLookup),
          getClassName(lfs?.md, fontSizeMdLookup),
          getClassName(lfs?.lg, fontSizeLgLookup),
          typeof labelFontWeight !== 'object' && getClassName(labelFontWeight, fontWeightLookup),
          getClassName(lfw?.base, fontWeightLookup),
          getClassName(lfw?.md, fontWeightMdLookup),
          getClassName(lfw?.lg, fontWeightLgLookup),
          labelClass
        )}
      >
        {label}
      </label>
    </div>
  );
};

export const Checkbox = memo(Component);
