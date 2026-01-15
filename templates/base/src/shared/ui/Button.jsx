import React from 'react';
import { PiSpinnerBold } from 'react-icons/pi';
import {
  AnimationLookup,
  colorLookup,
  fieldSize2XlLookup,
  fieldSizeLgLookup,
  fieldSizeLookup,
  fieldSizeMdLookup,
  fieldSizeXlLookup,
  fontFamilyLookup,
  fontSize2xlLookup,
  fontSizeLgLookup,
  fontSizeLookup,
  fontSizeMdLookup,
  fontSizeXlLookup,
  fontWeight2xlLookup,
  fontWeightLgLookup,
  fontWeightLookup,
  fontWeightMdLookup,
  fontWeightXlLookup,
  radiusLgLookup,
  radiusLookup,
  radiusMdLookup,
  radiusXlLookup,
} from '../theme';
import { getClassName, memo } from '../utils';

const variantLookup = {
  primary:
    'text-primary-foreground bg-primary hover:bg-primary/90 disabled:text-primary-foreground/70 disabled:bg-primary/50',
  outline:
    'border text-primary bg-primary-foreground hover:bg-neutral-50 disabled:text-primary/70 disabled:bg-neutral-50/50',
  pill: 'text-primary-foreground bg-primary hover:bg-primary/90 disabled:text-primary-foreground/70 disabled:bg-primary/50 rounded-lg',
};

/**
 * @typedef {'base' | 'md' | 'lg' | 'xl' | '2xl'} Breakpoint
 *
 * @typedef {'primary' | 'outline' | 'pill'} Variant
 *
 * @typedef {'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'} Size
 *
 * @typedef {''} Font
 *
 * @typedef {'primary' | 'secondary' | 'success' | 'danger' | 'white' | 'black'} Color
 *
 * @typedef {'sm' | 'rounded' | 'md' | 'lg' | 'xl' | 'full'} Radius
 *
 * @typedef {'thin'
 *   | 'extralight'
 *   | 'light'
 *   | 'normal'
 *   | 'medium'
 *   | 'semibold'
 *   | 'bold'
 *   | 'extrabold'
 *   | 'black'} Weight
 *
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
 *   | '9xl'} fontSize
 *
 *
 * @typedef {object} ComponentProps
 * @property {Variant} [variant]
 * @property {Radius} [radius]
 * @property {Size} [size]
 * @property {Font} [font]
 * @property {fontSize} [fontSize]
 * @property {Weight} [weight]
 * @property {boolean} [isLoading]
 * @property {Color} [color]
 * @param {React.ComponentProps<'button'> & ComponentProps} props
 * @returns {JSX.Element}
 */

const Component = (
  {
    variant = 'primary',
    radius = 'lg',
    size = 'lg',
    font = 'inter',
    fontSize = 'base',
    weight = 'semibold',
    color,
    isLoading,
    className,
    animation,
    type = 'button',
    children,
    ...rest
  },
  ref
) => {
  return (
    <button
      ref={ref}
      className={cn(
        'h-12 px-4 w-full rounded-lg text-base font-inter font-semibold disabled:cursor-not-allowed transition-colors flex justify-center items-center',
        typeof fontSize !== 'object' && getClassName(fontSize, fontSizeLookup),
        getClassName(fontSize?.base, fontSizeLookup),
        getClassName(fontSize?.md, fontSizeMdLookup),
        getClassName(fontSize?.lg, fontSizeLgLookup),
        getClassName(fontSize?.xl, fontSizeXlLookup),
        getClassName(fontSize?.['2xl'], fontSize2xlLookup),
        typeof weight !== 'object' && getClassName(weight, fontWeightLookup),
        getClassName(weight?.base, fontWeightLookup),
        getClassName(weight?.md, fontWeightMdLookup),
        getClassName(weight?.lg, fontWeightLgLookup),
        getClassName(weight?.xl, fontWeightXlLookup),
        getClassName(weight?.['2xl'], fontWeight2xlLookup),
        typeof size !== 'object' && getClassName(size, fieldSizeLookup),
        getClassName(size?.base, fieldSizeLookup),
        getClassName(size?.md, fieldSizeMdLookup),
        getClassName(size?.lg, fieldSizeLgLookup),
        getClassName(size?.xl, fieldSizeXlLookup),
        getClassName(size?.['2xl'], fieldSize2XlLookup),
        typeof radius !== 'object' && getClassName(radius, radiusLookup),
        getClassName(radius?.base, radiusLookup),
        getClassName(radius?.md, radiusMdLookup),
        getClassName(radius?.lg, radiusLgLookup),
        getClassName(radius?.xl, radiusXlLookup),
        variantLookup[variant],
        fontFamilyLookup[font],
        colorLookup[color],
        AnimationLookup[animation],
        className
      )}
      type={type}
      {...(isLoading && { disabled: true })}
      {...rest}
    >
      {isLoading ? <PiSpinnerBold className="animate-spin size-5 m-auto" /> : children}
    </button>
  );
};

export const Button = memo(React.forwardRef(Component));
