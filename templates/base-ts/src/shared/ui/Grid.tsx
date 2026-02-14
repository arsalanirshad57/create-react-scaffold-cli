import { getClassName, memo } from '../utils';
import { ComponentPropsWithRef, forwardRef, Ref } from 'react';
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
import { Responsive } from '../types/ui';

export type Gap = keyof typeof gapLookup;
export type Columns = keyof typeof columnsLookup;
export type Justify = keyof typeof justifyLookup;
export type Align = keyof typeof alignLookup;
export type Width = keyof typeof widthLookup;

export interface GridProps extends ComponentPropsWithRef<'div'> {
  grow?: boolean | Responsive<boolean>;
  gap?: Gap | Responsive<Gap>;
  columns?: Columns | Responsive<Columns>;
  justify?: Justify | Responsive<Justify>;
  align?: Align | Responsive<Align>;
  width?: Width | Responsive<Width>;
}

const Component = ({ grow, gap, columns, justify, align, className, width, ...rest }: GridProps, ref: Ref<HTMLDivElement>) => {
  const g = grow as any;
  const gp = gap as any;
  const c = columns as any;
  const j = justify as any;
  const a = align as any;
  const w = width as any;

  return (
    <div
      ref={ref}
      className={cn(
        'grid',
        typeof grow !== 'object' && grow === true ? 'h-full' : grow === false && 'h-auto',
        g?.base === true ? 'h-full' : g?.base === false && 'h-auto',
        g?.md === true ? 'md:h-full' : g?.md === false && 'md:h-auto',
        g?.lg === true ? 'lg:h-full' : g?.lg === false && 'lg:h-auto',
        typeof gap !== 'object' && getClassName(gap, gapLookup),
        getClassName(gp?.base, gapLookup),
        getClassName(gp?.md, gapMdLookup),
        getClassName(gp?.lg, gapLgLookup),
        getClassName(gp?.xl, gapXlLookup),
        typeof columns !== 'object' && getClassName(columns, columnsLookup),
        getClassName(c?.base, columnsLookup),
        getClassName(c?.md, columnsMdLookup),
        getClassName(c?.sm, columnsSmLookup),
        getClassName(c?.lg, columnsLgLookup),
        getClassName(c?.xl, columnsXlLookup),
        getClassName(c?.['2xl'], columns2XlLookup),
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
        className
      )}
      {...rest}
    />
  );
};

export const Grid = memo(forwardRef(Component));
