import React from 'react';
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

/**
 *
 *
 * @typedef {'base' | 'md' | 'lg'} Breakpoint
 *
 * @typedef {0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 5 | 6 | 7 | 8} Size
 *
 * @typedef {'xs'
 *   | 'sm'
 *   | 'base'
 *   | 'lg'
 *   | 'xl'
 *   | '2xl'
 *   | '3xl'
 *   | '4xl'
 *   | '5xl'
 *   | '6xl'
 *   | '7xl'
 *   | '8xl'
 *   | '9xl'} LabelFontSize
 *
 *
 * @typedef {'thin'
 *   | 'extralight'
 *   | 'light'
 *   | 'normal'
 *   | 'medium'
 *   | 'semibold'
 *   | 'bold'
 *   | 'extrabold'
 *   | 'black'} LabelFontWeight
 *
 *
 * @typedef {object} ComponentProps
 * @property {Size | Record<Breakpoint, Size>} [size]
 *
 *   - @property {LabelFontSize | Record<Breakpoint, LabelFontSize>} [labelFontSize]
 *
 * @property {LabelFontWeight | Record<Breakpoint, LabelFontWeight>} [labelFontWeight]
 * @param {React.ComponentProps<'input'> & ComponentProps} props
 * @returns {JSX.Element}
 */

const Component = ({
  label,
  disabled = false,
  className = '',
  labelClass,
  checkClass,
  onChange,
  size = { base: 4, md: 5 },
  labelFontSize = { base: 'xs', md: 'sm', lg: 'base' },
  labelFontWeight,
  ...rest
}) => {
  const id = React.useId();

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
          getClassName(size?.base, sizeLookup),
          getClassName(size?.md, sizeMdLookup),
          getClassName(size?.lg, sizeLgLookup),
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
          getClassName(labelFontSize?.base, fontSizeLookup),
          getClassName(labelFontSize?.md, fontSizeMdLookup),
          getClassName(labelFontSize?.lg, fontSizeLgLookup),
          typeof labelFontWeight !== 'object' && getClassName(labelFontWeight, fontWeightLookup),
          getClassName(labelFontWeight?.base, fontWeightLookup),
          getClassName(labelFontWeight?.md, fontWeightMdLookup),
          getClassName(labelFontWeight?.lg, fontWeightLgLookup),
          labelClass
        )}
      >
        {label}
      </label>
    </div>
  );
};

export const Checkbox = memo(Component);
