import { ComponentPropsWithRef, forwardRef, Ref } from 'react';
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
import { Responsive } from '../types/ui';

export type Grow = keyof typeof growLookup;
export type AlignSelf = keyof typeof alignSelfLookup;
export type Width = keyof typeof widthLookup;

export interface FlexItemProps extends ComponentPropsWithRef<'div'> {
  hide?: boolean | Responsive<boolean>;
  grow?: Grow | Responsive<Grow>;
  width?: Width | Responsive<Width>;
  alignSelf?: AlignSelf | Responsive<AlignSelf>;
}

const Component = ({ hide, grow, alignSelf, width, className, ...rest }: FlexItemProps, ref: Ref<HTMLDivElement>) => {
  const h = hide as any;
  const g = grow as any;
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
        typeof grow !== 'object' && getClassName(grow, growLookup),
        getClassName(g?.base, growLookup),
        getClassName(g?.md, growMdLookup),
        getClassName(g?.lg, growLgLookup),
        getClassName(g?.xl, growXlLookup),
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

export const FlexItem = memo(forwardRef(Component));
