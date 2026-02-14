import React from 'react';
import {
  marginLookup,
  marginMdLookup,
  marginLgLookup,
  marginXLookup,
  marginXMdLookup,
  marginYLookup,
  marginYMdLookup,
  marginYLgLookup,
  paddingLgLookup,
  paddingLookup,
  paddingMdLookup,
  paddingXLgLookup,
  paddingXLookup,
  paddingXMdLookup,
  paddingYLgLookup,
  paddingYLookup,
  paddingYMdLookup,
  widthLookup,
  widthMdLookup,
  widthLgLookup,
  marginXlLookup,
  marginXXlLookup,
  marginYXlLookup,
  paddingXlLookup,
  paddingXXlLookup,
  paddingYXlLookup,
  marginXlgLookup,
  radiusLookup,
  radiusMdLookup,
  radiusLgLookup,
  radiusXlLookup,
  paddingY2XlLookup,
  paddingX2XlLookup,
} from '../theme';
import { getClassName, memo } from '../utils';
import { cn } from '../libs';

/**
 * @typedef {'base' | 'md' | 'lg' | 'xl' | '2xl'} Breakpoint
 *
 * @typedef {0
 *   | 0.5
 *   | 1
 *   | 1.5
 *   | 2
 *   | 2.5
 *   | 3
 *   | 3.5
 *   | 4
 *   | 5
 *   | 6
 *   | 7
 *   | 8
 *   | 9
 *   | 10
 *   | 11
 *   | 12
 *   | 14
 *   | 16
 *   | 20
 *   | 24
 *   | 28
 *   | 32
 *   | 36
 *   | 40} Size
 *
 *
 * @typedef {0
 *   | 0.5
 *   | 1
 *   | 1.5
 *   | 2
 *   | 2.5
 *   | 3
 *   | 3.5
 *   | 4
 *   | 5
 *   | 6
 *   | 7
 *   | 8
 *   | 9
 *   | 10
 *   | 11
 *   | 12
 *   | 14
 *   | 16
 *   | 20
 *   | 24
 *   | 28
 *   | 32
 *   | 36
 *   | 40
 *   | fit
 *   | full
 *   | auto} Width
 *
 *
 * @typedef {'sm' | 'rounded' | 'md' | 'lg' | 'xl' | 'full'} Radius
 *
 * @typedef {Size} Margin
 *
 * @typedef {Size} Padding
 *
 * @typedef {'x' | 'y'} Axis
 *
 * @typedef {object} ComponentProps
 * @property {boolean | Record<Breakpoint, boolean>} [hide]
 * @property {boolean | Record<Breakpoint, boolean>} [grow]
 * @property {Margin
 *   | Record<Breakpoint, Margin>
 *   | Record<Axis, Margin>
 *   | Record<Axis, Record<Breakpoint, Margin>>} [margin]
 * @property {Padding
 *   | Record<Breakpoint, Padding>
 *   | Record<Axis, Padding>
 *   | Record<Axis, Record<Breakpoint, Padding>>} [padding]
 * @property {Width | Record<Breakpoint, Width>} [width]
 * @property {Radius} [radius]
 * @param {React.ComponentProps<'div'> & ComponentProps} props
 * @returns {JSX.Element}
 */

const Component = ({ hide, grow, margin, radius, padding, width, className, ...rest }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        typeof hide !== 'object' && hide === true ? 'hidden' : hide === false && 'block',
        hide?.base === true ? 'hidden' : hide?.base === false && 'block',
        hide?.md === true ? 'md:hidden' : hide?.md === false && 'md:block',
        hide?.lg === true ? 'lg:hidden' : hide?.lg === false && 'lg:block',
        typeof grow !== 'object' && grow === true ? 'h-full' : grow === false && 'h-auto',
        grow?.base === true ? 'h-full' : grow?.base === false && 'h-auto',
        grow?.md === true ? 'md:h-full' : grow?.md === false && 'md:h-auto',
        grow?.lg === true ? 'lg:h-full' : grow?.lg === false && 'lg:h-auto',
        typeof margin !== 'object' && getClassName(margin, marginLookup),
        getClassName(margin?.base, marginLookup),
        getClassName(margin?.md, marginMdLookup),
        getClassName(margin?.lg, marginLgLookup),
        getClassName(margin?.xl, marginXlLookup),
        typeof margin?.x !== 'object' && getClassName(margin?.x, marginXLookup),
        getClassName(margin?.x?.base, marginXLookup),
        getClassName(margin?.x?.md, marginXMdLookup),
        getClassName(margin?.x?.lg, marginXlgLookup),
        getClassName(margin?.x?.xl, marginXXlLookup),
        typeof margin?.y !== 'object' && getClassName(margin?.y, marginYLookup),
        getClassName(margin?.y?.base, marginYLookup),
        getClassName(margin?.y?.md, marginYMdLookup),
        getClassName(margin?.y?.lg, marginYLgLookup),
        getClassName(margin?.y?.xl, marginYXlLookup),
        typeof padding !== 'object' && getClassName(padding, paddingLookup),
        getClassName(padding?.base, paddingLookup),
        getClassName(padding?.md, paddingMdLookup),
        getClassName(padding?.lg, paddingLgLookup),
        getClassName(padding?.xl, paddingXlLookup),
        getClassName(padding?.['2xl'], paddingXlLookup),
        typeof padding?.x !== 'object' && getClassName(padding?.x, paddingXLookup),
        getClassName(padding?.x?.base, paddingXLookup),
        getClassName(padding?.x?.md, paddingXMdLookup),
        getClassName(padding?.x?.lg, paddingXLgLookup),
        getClassName(padding?.x?.xl, paddingXXlLookup),
        getClassName(padding?.x?.['2xl'], paddingX2XlLookup),
        typeof padding?.y !== 'object' && getClassName(padding?.y, paddingYLookup),
        getClassName(padding?.y?.base, paddingYLookup),
        getClassName(padding?.y?.md, paddingYMdLookup),
        getClassName(padding?.y?.lg, paddingYLgLookup),
        getClassName(padding?.y?.xl, paddingYXlLookup),
        getClassName(padding?.y?.['2xl'], paddingY2XlLookup),
        typeof width !== 'object' && getClassName(width, widthLookup),
        getClassName(width?.base, widthLookup),
        getClassName(width?.md, widthMdLookup),
        getClassName(width?.lg, widthLgLookup),
        typeof radius !== 'object' && getClassName(radius, radiusLookup),
        getClassName(radius?.base, radiusLookup),
        getClassName(radius?.md, radiusMdLookup),
        getClassName(radius?.lg, radiusLgLookup),
        getClassName(radius?.xl, radiusXlLookup),
        className
      )}
      {...rest}
    />
  );
};

export const Box = memo(React.forwardRef(Component));
