import React from 'react';
import {
  growLookup,
  growMdLookup,
  growLgLookup,
  alignSelfLookup,
  alignSelfMdLookup,
  alignSelfLgLookup,
  widthLookup,
  widthMdLookup,
  widthLgLookup,
  growXlLookup,
  alignSelfXlLookup,
  widthXlLookup,
} from '../theme';
import { getClassName, memo } from '../utils';
import { cn } from '../libs';

/**
 * @typedef {'base' | 'md' | 'lg' | 'xl'} Breakpoint
 *
 * @typedef {'auto' | 'start' | 'end' | 'center' | 'baseline' | 'stretch'} AlignSelf
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
 * @typedef {0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12} Grow
 *
 * @typedef {object} ComponentProps
 * @property {boolean | Record<Breakpoint, boolean>} [hide]
 * @property {Grow | Record<Breakpoint, Grow>} [grow]
 * @property {Width | Record<Breakpoint, Width>} [width]
 * @property {AlignSelf | Record<Breakpoint, AlignSelf>} [alignSelf]
 * @param {React.ComponentProps<'div'> & ComponentProps} props
 * @returns {JSX.Element}
 */

const Component = ({ hide, grow, alignSelf, width, className, ...rest }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        typeof hide !== 'object' && hide === true ? 'hidden' : hide === false && 'block',
        hide?.base === true ? 'hidden' : hide?.base === false && 'block',
        hide?.md === true ? 'md:hidden' : hide?.md === false && 'md:block',
        hide?.lg === true ? 'lg:hidden' : hide?.lg === false && 'lg:block',
        typeof grow !== 'object' && getClassName(grow, growLookup),
        getClassName(grow?.base, growLookup),
        getClassName(grow?.md, growMdLookup),
        getClassName(grow?.lg, growLgLookup),
        getClassName(grow?.xl, growXlLookup),
        typeof alignSelf !== 'object' && getClassName(alignSelf, alignSelfLookup),
        getClassName(alignSelf?.base, alignSelfLookup),
        getClassName(alignSelf?.md, alignSelfMdLookup),
        getClassName(alignSelf?.lg, alignSelfLgLookup),
        getClassName(alignSelf?.xl, alignSelfXlLookup),
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

export const FlexItem = memo(React.forwardRef(Component));
