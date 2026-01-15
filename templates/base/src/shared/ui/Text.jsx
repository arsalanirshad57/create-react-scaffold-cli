import React from 'react';
import {
  fontSizeLookup,
  fontSizeMdLookup,
  fontSizeLgLookup,
  fontWeightLookup,
  fontWeightMdLookup,
  fontWeightLgLookup,
  textAlignLookup,
  textAlignMdLookup,
  textAlignLgLookup,
  colorLookup,
  fontFamilyLookup,
  fontFamilyMdLookup,
  fontFamilyLgLookup,
  fontSizeXlLookup,
  fontWeightXlLookup,
  textAlignXlLookup,
  fontFamilyXlLookup,
  fontSize2xlLookup,
  fontWeight2xlLookup,
  colorMdLookup,
  colorLgLookup,
  colorXlLookup,
} from '../theme';
import { cn } from '../libs';
import { getClassName } from '../utils';

/**
 * @typedef {'base' | 'md' | 'lg' | 'xl' | '2xl'} Breakpoint
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
 *   | '9xl'} Size
 *
 *
 * @typedef {'left' | 'center' | 'right' | 'justify' | 'start' | 'end'} Align
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
 * @typedef {''} Font
 *
 * @typedef {'primary' | 'secondary' | 'success' | 'danger' | 'white' | 'black'} Color
 *
 * @typedef {object} ComponentProps
 * @property {Size | Record<Breakpoint, Size>} [size]
 * @property {Weight | Record<Breakpoint, Weight>} [weight]
 * @property {Font | Record<Breakpoint, Font>} [font]
 * @property {Align | Record<Breakpoint, Align>} [align]
 * @property {boolean | Record<Breakpoint, boolean>} [truncate]
 * @property {Color | Record<Breakpoint, Color>} [color]
 * @param {React.ComponentProps<'p'> & ComponentProps} props
 * @returns {JSX.Element}
 */

const Component = (
  { size, weight, align, truncate, color, font, animation, className, ...rest },
  ref
) => {
  return (
    <p
      ref={ref}
      className={cn(
        typeof size !== 'object' && getClassName(size, fontSizeLookup),
        getClassName(size?.base, fontSizeLookup),
        getClassName(size?.md, fontSizeMdLookup),
        getClassName(size?.lg, fontSizeLgLookup),
        getClassName(size?.xl, fontSizeXlLookup),
        getClassName(size?.['2xl'], fontSize2xlLookup),
        typeof weight !== 'object' && getClassName(weight, fontWeightLookup),
        getClassName(weight?.base, fontWeightLookup),
        getClassName(weight?.md, fontWeightMdLookup),
        getClassName(weight?.lg, fontWeightLgLookup),
        getClassName(weight?.xl, fontWeightXlLookup),
        getClassName(weight?.['2xl'], fontWeight2xlLookup),
        typeof align !== 'object' && getClassName(align, textAlignLookup),
        getClassName(align?.base, textAlignLookup),
        getClassName(align?.md, textAlignMdLookup),
        getClassName(align?.lg, textAlignLgLookup),
        getClassName(align?.xl, textAlignXlLookup),
        typeof font !== 'object' && getClassName(font, fontFamilyLookup),
        getClassName(font?.base, fontFamilyLookup),
        getClassName(font?.md, fontFamilyMdLookup),
        getClassName(font?.lg, fontFamilyLgLookup),
        getClassName(font?.xl, fontFamilyXlLookup),
        typeof font !== 'object' && getClassName(color, colorLookup),
        getClassName(color?.base, colorLookup),
        getClassName(color?.md, colorMdLookup),
        getClassName(color?.lg, colorLgLookup),
        getClassName(color?.xl, colorXlLookup),
        typeof truncate !== 'object' && truncate && 'truncate',
        truncate?.base && 'truncate',
        truncate?.md && 'md:truncate',
        truncate?.lg && 'lg:truncate',
        truncate?.xl && 'xl:truncate',
        className
      )}
      {...rest}
    />
  );
};

export const Text = memo(React.forwardRef(Component));
