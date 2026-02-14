import { ComponentPropsWithRef, forwardRef, Ref } from 'react';
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
import { Responsive } from '../types/ui';

export type Gap = keyof typeof gapLookup;
export type Direction = keyof typeof directionLookup;
export type Justify = keyof typeof justifyLookup;
export type Align = keyof typeof alignLookup;
export type Width = keyof typeof widthLookup;

export interface FlexProps extends ComponentPropsWithRef<'div'> {
  grow?: boolean | Responsive<boolean>;
  gap?: Gap | Responsive<Gap>;
  direction?: Direction | Responsive<Direction>;
  justify?: Justify | Responsive<Justify>;
  align?: Align | Responsive<Align>;
  width?: Width | Responsive<Width>;
}

const Component = ({ grow, gap, direction, justify, align, width, className, ...rest }: FlexProps, ref: Ref<HTMLDivElement>) => {
  const g = grow as any;
  const gp = gap as any;
  const d = direction as any;
  const j = justify as any;
  const a = align as any;
  const w = width as any;

  return (
    <div
      ref={ref}
      className={cn(
        'flex',
        typeof grow !== 'object' && grow === true ? 'h-full' : grow === false && 'h-auto',
        g?.base === true ? 'h-full' : g?.base === false && 'h-auto',
        g?.md === true ? 'md:h-full' : g?.md === false && 'md:h-auto',
        g?.lg === true ? 'lg:h-full' : g?.lg === false && 'lg:h-auto',
        typeof gap !== 'object' && getClassName(gap, gapLookup),
        getClassName(gp?.base, gapLookup),
        getClassName(gp?.md, gapMdLookup),
        getClassName(gp?.lg, gapLgLookup),
        getClassName(gp?.xl, gapXlLookup),
        getClassName(gp?.['2xl'], gap2XlLookup),
        typeof direction !== 'object' && getClassName(direction, directionLookup),
        getClassName(d?.base, directionLookup),
        getClassName(d?.md, directionMdLookup),
        getClassName(d?.lg, directionLgLookup),
        getClassName(d?.xl, directionXlLookup),
        typeof justify !== 'object' && getClassName(justify, justifyLookup),
        getClassName(j?.base, justifyLookup),
        getClassName(j?.md, justifyMdLookup),
        getClassName(j?.lg, justifyLgLookup),
        getClassName(j?.xl, justifyXlLookup),
        typeof align !== 'object' && getClassName(align, alignLookup),
        getClassName(a?.base, alignLookup),
        getClassName(a?.md, alignMdLookup),
        getClassName(a?.lg, alignLgLookup),
        getClassName(a?.xl, alignXlLookup),
        typeof width !== 'object' && getClassName(width, widthLookup),
        getClassName(w?.base, widthLookup),
        getClassName(w?.md, widthMdLookup),
        getClassName(w?.lg, widthLgLookup),
        getClassName(w?.xl, widthXlLookup),
        getClassName(w?.['2xl'], width2XlLookup),
        className
      )}
      {...rest}
    />
  );
};

export const Flex = memo(forwardRef(Component));
