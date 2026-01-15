import { getClassName, memo } from '../utils';
import React from 'react';
import {
  gapLookup,
  gapMdLookup,
  gapLgLookup,
  columnsLookup,
  columnsMdLookup,
  columnsLgLookup,
  justifyLookup,
  justifyMdLookup,
  justifyLgLookup,
  alignLookup,
  alignMdLookup,
  alignLgLookup,
  widthLookup,
  widthLgLookup,
  widthMdLookup,
  columnsSmLookup,
  gapXlLookup,
  columnsXlLookup,
  justifyXlLookup,
  alignXlLookup,
  widthXlLookup,
  columns2XlLookup,
} from '../theme';
import { cn } from '../libs';

/**
 * @typedef {'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'} Breakpoint
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
 * @typedef {'normal' | 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch'} Justify
 *
 *
 * @typedef {'start' | 'end' | 'center' | 'baseline' | 'stretch'} Align
 *
 * @typedef {1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12} Columns
 *
 * @typedef {object} ComponentProps
 * @property {boolean | Record<Breakpoint, boolean>} [grow]
 * @property {Gap | Record<Breakpoint, Gap>} [gap]
 * @property {Columns | Record<Breakpoint, Columns>} [columns]
 * @property {Justify | Record<Breakpoint, Justify>} [justify]
 * @property {Align | Record<Breakpoint, Align>} [align]
 * @property {Width | Record<Breakpoint, Width>} [width]
 * @param {React.ComponentProps<'div'> & ComponentProps} props
 * @returns {JSX.Element}
 */

const Component = ({ grow, gap, columns, justify, align, className, width, ...rest }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'grid',
        typeof grow !== 'object' && grow === true ? 'h-full' : grow === false && 'h-auto',
        grow?.base === true ? 'h-full' : grow?.base === false && 'h-auto',
        grow?.md === true ? 'md:h-full' : grow?.md === false && 'md:h-auto',
        grow?.lg === true ? 'lg:h-full' : grow?.lg === false && 'lg:h-auto',
        typeof gap !== 'object' && getClassName(gap, gapLookup),
        getClassName(gap?.base, gapLookup),
        getClassName(gap?.md, gapMdLookup),
        getClassName(gap?.lg, gapLgLookup),
        getClassName(gap?.xl, gapXlLookup),
        typeof columns !== 'object' && getClassName(columns, columnsLookup),
        getClassName(columns?.base, columnsLookup),
        getClassName(columns?.md, columnsMdLookup),
        getClassName(columns?.sm, columnsSmLookup),
        getClassName(columns?.lg, columnsLgLookup),
        getClassName(columns?.xl, columnsXlLookup),
        getClassName(columns?.['2xl'], columns2XlLookup),
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
        className
      )}
      {...rest}
    />
  );
};

export const Grid = memo(React.forwardRef(Component));
