import { ComponentPropsWithRef, forwardRef, Ref } from 'react';
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
import { Breakpoint } from '../types/ui';


export type Size = keyof typeof marginLookup;
export type Width = keyof typeof widthLookup;
export type Radius = keyof typeof radiusLookup;

type MarginValue = Size; // They share the same keys
type PaddingValue = Size;

type Axis = 'x' | 'y';

type ResponsiveProp<T> = T | Partial<Record<Breakpoint, T>>;

type AxisProp<T> = {
  [K in Axis]?: ResponsiveProp<T>;
};

type SpacingProp<T> = ResponsiveProp<T> | AxisProp<T>;

export interface BoxProps extends ComponentPropsWithRef<'div'> {
  hide?: boolean | ResponsiveProp<boolean>;
  grow?: boolean | ResponsiveProp<boolean>;
  margin?: SpacingProp<MarginValue>;
  padding?: SpacingProp<PaddingValue>;
  width?: ResponsiveProp<Width>;
  radius?: ResponsiveProp<Radius>;
}

const Component = (
  { hide, grow, margin, radius, padding, width, className, ...rest }: BoxProps,
  ref: Ref<HTMLDivElement>
) => {
    // Helper to check if a prop is responsive object (not axis)

    
    // We need to cast props to 'any' sometimes to access properties because TS doesn't know for sure if it's an object
    const m = margin as any;
    const p = padding as any;
    const w = width as any;
    const r = radius as any;
    const h = hide as any;
    const g = grow as any;

  return (
    <div
      ref={ref}
      className={cn(
        typeof hide !== 'object' && hide === true ? 'hidden' : hide === false && 'block',
        h?.base === true ? 'hidden' : h?.base === false && 'block',
        h?.md === true ? 'md:hidden' : h?.md === false && 'md:block',
        h?.lg === true ? 'lg:hidden' : h?.lg === false && 'lg:block',
        typeof grow !== 'object' && grow === true ? 'h-full' : grow === false && 'h-auto',
        g?.base === true ? 'h-full' : g?.base === false && 'h-auto',
        g?.md === true ? 'md:h-full' : g?.md === false && 'md:h-auto',
        g?.lg === true ? 'lg:h-full' : g?.lg === false && 'lg:h-auto',
        
        typeof margin !== 'object' && getClassName(margin, marginLookup),
        getClassName(m?.base, marginLookup),
        getClassName(m?.md, marginMdLookup),
        getClassName(m?.lg, marginLgLookup),
        getClassName(m?.xl, marginXlLookup),
        
        typeof m?.x !== 'object' && getClassName(m?.x, marginXLookup),
        getClassName(m?.x?.base, marginXLookup),
        getClassName(m?.x?.md, marginXMdLookup),
        getClassName(m?.x?.lg, marginXlgLookup),
        getClassName(m?.x?.xl, marginXXlLookup),
        
        typeof m?.y !== 'object' && getClassName(m?.y, marginYLookup),
        getClassName(m?.y?.base, marginYLookup),
        getClassName(m?.y?.md, marginYMdLookup),
        getClassName(m?.y?.lg, marginYLgLookup),
        getClassName(m?.y?.xl, marginYXlLookup),
        
        typeof padding !== 'object' && getClassName(padding, paddingLookup),
        getClassName(p?.base, paddingLookup),
        getClassName(p?.md, paddingMdLookup),
        getClassName(p?.lg, paddingLgLookup),
        getClassName(p?.xl, paddingXlLookup),
        getClassName(p?.['2xl'], paddingXlLookup),
        
        typeof p?.x !== 'object' && getClassName(p?.x, paddingXLookup),
        getClassName(p?.x?.base, paddingXLookup),
        getClassName(p?.x?.md, paddingXMdLookup),
        getClassName(p?.x?.lg, paddingXLgLookup),
        getClassName(p?.x?.xl, paddingXXlLookup),
        getClassName(p?.x?.['2xl'], paddingX2XlLookup),
        
        typeof p?.y !== 'object' && getClassName(p?.y, paddingYLookup),
        getClassName(p?.y?.base, paddingYLookup),
        getClassName(p?.y?.md, paddingYMdLookup),
        getClassName(p?.y?.lg, paddingYLgLookup),
        getClassName(p?.y?.xl, paddingYXlLookup),
        getClassName(p?.y?.['2xl'], paddingY2XlLookup),
        
        typeof width !== 'object' && getClassName(width, widthLookup),
        getClassName(w?.base, widthLookup),
        getClassName(w?.md, widthMdLookup),
        getClassName(w?.lg, widthLgLookup),
        
        typeof radius !== 'object' && getClassName(radius, radiusLookup),
        getClassName(r?.base, radiusLookup),
        getClassName(r?.md, radiusMdLookup),
        getClassName(r?.lg, radiusLgLookup),
        getClassName(r?.xl, radiusXlLookup),
        
        className
      )}
      {...rest}
    />
  );
};

export const Box = memo(forwardRef(Component));
