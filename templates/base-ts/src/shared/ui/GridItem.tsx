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
import { ComponentPropsWithRef, forwardRef, Ref } from 'react';
import { Responsive } from '../types/ui';

export type Span = keyof typeof spanLookup;
export type AlignSelf = keyof typeof alignSelfLookup;
export type Width = keyof typeof widthLookup;

export interface GridItemProps extends ComponentPropsWithRef<'div'> {
  hide?: boolean | Responsive<boolean>;
  span?: Span | Responsive<Span>;
  alignSelf?: AlignSelf | Responsive<AlignSelf>;
  width?: Width | Responsive<Width>;
}

const Component = ({ hide, span, alignSelf, width, className, ...rest }: GridItemProps, ref: Ref<HTMLDivElement>) => {
  const h = hide as any;
  const s = span as any;
  const as = alignSelf as any;
  const w = width as any;

  return (
    <div
      ref={ref}
      className={cn(
        typeof hide !== 'object' && hide === true ? 'hidden' : hide === false && 'block',
        h?.base === true ? 'hidden' : h?.base === false && 'block',
        h?.md === true ? 'md:hidden' : h?.md === false && 'md:block',
        h?.lg === true ? 'lg:hidden' : h?.lg === false && 'lg:block',
        typeof span !== 'object' && getClassName(span, spanLookup),
        getClassName(s?.base, spanLookup),
        getClassName(s?.md, spanMdLookup),
        getClassName(s?.lg, spanLgLookup),
        getClassName(s?.xl, spanXlLookup),
        typeof alignSelf !== 'object' && getClassName(alignSelf, alignSelfLookup),
        getClassName(as?.base, alignSelfLookup),
        getClassName(as?.md, alignSelfMdLookup),
        getClassName(as?.lg, alignSelfLgLookup),
        getClassName(as?.xl, alignSelfXlLookup),
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

export const GridItem = memo(forwardRef(Component));
