import {
  spanLookup,
  spanMdLookup,
  spanLgLookup,
  alignSelfLookup,
  alignSelfMdLookup,
  alignSelfLgLookup,
  widthLookup,
  widthMdLookup,
  widthLgLookup,
  spanXlLookup,
  alignSelfXlLookup,
  widthXlLookup,
} from '../theme';
import { getClassName, memo } from '../utils';
import { cn } from '../libs';
import React from 'react';

/**
 * @typedef {'base' | 'md' | 'lg' | 'xl'} Breakpoint
 *
 * @typedef {'auto' | 'start' | 'end' | 'center' | 'baseline' | 'stretch'} AlignSelf
 *
 * @typedef {'auto' | 'full' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12} Span
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
 * @typedef {object} ComponentProps
 * @property {boolean | Record<Breakpoint, boolean>} [hide]
 * @property {Span | Record<Breakpoint, Span>} [span]
 * @property {AlignSelf | Record<Breakpoint, AlignSelf>} [alignSelf]
 * @property {Width | Record<Breakpoint, Width>} [width]
 * @param {React.ComponentProps<'div'> & ComponentProps} props
 * @returns {JSX.Element}
 */

const Component = ({ hide, span, alignSelf, width, className, ...rest }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        typeof hide !== 'object' && hide === true ? 'hidden' : hide === false && 'block',
        hide?.base === true ? 'hidden' : hide?.base === false && 'block',
        hide?.md === true ? 'md:hidden' : hide?.md === false && 'md:block',
        hide?.lg === true ? 'lg:hidden' : hide?.lg === false && 'lg:block',
        typeof span !== 'object' && getClassName(span, spanLookup),
        getClassName(span?.base, spanLookup),
        getClassName(span?.md, spanMdLookup),
        getClassName(span?.lg, spanLgLookup),
        getClassName(span?.xl, spanXlLookup),
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

export const GridItem = memo(React.forwardRef(Component));
