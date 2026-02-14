import React from 'react';
import {
  gapLookup,
  gapMdLookup,
  gapLgLookup,
  directionLookup,
  directionMdLookup,
  directionLgLookup,
  justifyLookup,
  justifyMdLookup,
  justifyLgLookup,
  alignLookup,
  alignMdLookup,
  alignLgLookup,
  widthLookup,
  widthMdLookup,
  widthLgLookup,
  gapXlLookup,
  directionXlLookup,
  justifyXlLookup,
  alignXlLookup,
  widthXlLookup,
  gap2XlLookup,
  width2XlLookup,
} from '../theme';
import { cn } from '../libs';
import { getClassName, memo } from '../utils';

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
 *   | 40} Gap
 *
 *
 * @typedef {'normal' | 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch'} Justify
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
 * @typedef {'start' | 'end' | 'center' | 'baseline' | 'stretch'} Align
 *
 * @typedef {'row' | 'rowReverse' | 'column' | 'columnReverse'} Direction
 *
 * @typedef {object} ComponentProps
 * @property {boolean | Record<Breakpoint, boolean>} [grow]
 * @property {Gap | Record<Breakpoint, Gap>} [gap]
 * @property {Direction | Record<Breakpoint, Direction>} [direction]
 * @property {Justify | Record<Breakpoint, Justify>} [justify]
 * @property {Align | Record<Breakpoint, Align>} [align]
 * @property {Width | Record<Breakpoint, Width>} [width]
 * @param {React.ComponentProps<'div'> & ComponentProps} props
 * @returns {JSX.Element}
 */

const Component = ({ grow, gap, direction, justify, align, width, className, ...rest }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'flex',
        typeof grow !== 'object' && grow === true ? 'h-full' : grow === false && 'h-auto',
        grow?.base === true ? 'h-full' : grow?.base === false && 'h-auto',
        grow?.md === true ? 'md:h-full' : grow?.md === false && 'md:h-auto',
        grow?.lg === true ? 'lg:h-full' : grow?.lg === false && 'lg:h-auto',
        typeof gap !== 'object' && getClassName(gap, gapLookup),
        getClassName(gap?.base, gapLookup),
        getClassName(gap?.md, gapMdLookup),
        getClassName(gap?.lg, gapLgLookup),
        getClassName(gap?.xl, gapXlLookup),
        getClassName(gap?.['2xl'], gap2XlLookup),
        typeof direction !== 'object' && getClassName(direction, directionLookup),
        getClassName(direction?.base, directionLookup),
        getClassName(direction?.md, directionMdLookup),
        getClassName(direction?.lg, directionLgLookup),
        getClassName(direction?.xl, directionXlLookup),
        typeof justify !== 'object' && getClassName(justify, justifyLookup),
        getClassName(justify?.base, justifyLookup),
        getClassName(justify?.md, justifyMdLookup),
        getClassName(justify?.lg, justifyLgLookup),
        getClassName(justify?.xl, justifyXlLookup),
        typeof align !== 'object' && getClassName(align, alignLookup),
        getClassName(align?.base, alignLookup),
        getClassName(align?.md, alignMdLookup),
        getClassName(align?.lg, alignLgLookup),
        getClassName(align?.xl, alignXlLookup),
        typeof width !== 'object' && getClassName(width, widthLookup),
        getClassName(width?.base, widthLookup),
        getClassName(width?.md, widthMdLookup),
        getClassName(width?.lg, widthLgLookup),
        getClassName(width?.xl, widthXlLookup),
        getClassName(width?.['2xl'], width2XlLookup),
        className
      )}
      {...rest}
    />
  );
};

export const Flex = memo(React.forwardRef(Component));
