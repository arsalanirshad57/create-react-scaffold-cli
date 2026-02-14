import { ComponentPropsWithRef, forwardRef, Ref } from 'react';
import {
  fontSizeLookup,
  fontSizeMdLookup,
  fontSizeLgLookup,
  fontWeightLookup,
  fontWeightMdLookup,
  fontWeightLgLookup,
  textAlignLookup,
  textAlignMdLookup,
  textAlignLgLookup,
  colorLookup,
  fontFamilyLookup,
  fontFamilyMdLookup,
  fontFamilyLgLookup,
  fontSizeXlLookup,
  fontWeightXlLookup,
  textAlignXlLookup,
  fontFamilyXlLookup,
  fontSize2xlLookup,
  fontWeight2xlLookup,
  colorMdLookup,
  colorLgLookup,
  colorXlLookup,
} from '../theme';
import { cn } from '../libs';
import { getClassName, memo } from '../utils';
import { Responsive } from '../types/ui';

export type TextSize = keyof typeof fontSizeLookup;
export type Weight = keyof typeof fontWeightLookup;
export type Align = keyof typeof textAlignLookup;
export type Font = keyof typeof fontFamilyLookup;
export type Color = keyof typeof colorLookup;

export interface TextProps extends Omit<ComponentPropsWithRef<'p'>, 'color'> {
  size?: TextSize | Responsive<TextSize>;
  weight?: Weight | Responsive<Weight>;
  font?: Font | Responsive<Font>;
  align?: Align | Responsive<Align>;
  truncate?: boolean | Responsive<boolean>;
  color?: Color | Responsive<Color>;
}

const Component = (
  { size, weight, align, truncate, color, font,  className, ...rest }: TextProps,
  ref: Ref<HTMLParagraphElement>
) => {
  const s = size as any;
  const w = weight as any;
  const a = align as any;
  const f = font as any;
  const c = color as any;
  const t = truncate as any;

  return (
    <p
      ref={ref}
      className={cn(
        typeof size !== 'object' && getClassName(size, fontSizeLookup),
        getClassName(s?.base, fontSizeLookup),
        getClassName(s?.md, fontSizeMdLookup),
        getClassName(s?.lg, fontSizeLgLookup),
        getClassName(s?.xl, fontSizeXlLookup),
        getClassName(s?.['2xl'], fontSize2xlLookup),
        typeof weight !== 'object' && getClassName(weight, fontWeightLookup),
        getClassName(w?.base, fontWeightLookup),
        getClassName(w?.md, fontWeightMdLookup),
        getClassName(w?.lg, fontWeightLgLookup),
        getClassName(w?.xl, fontWeightXlLookup),
        getClassName(w?.['2xl'], fontWeight2xlLookup),
        typeof align !== 'object' && getClassName(align, textAlignLookup),
        getClassName(a?.base, textAlignLookup),
        getClassName(a?.md, textAlignMdLookup),
        getClassName(a?.lg, textAlignLgLookup),
        getClassName(a?.xl, textAlignXlLookup),
        typeof font !== 'object' && getClassName(font, fontFamilyLookup),
        getClassName(f?.base, fontFamilyLookup),
        getClassName(f?.md, fontFamilyMdLookup),
        getClassName(f?.lg, fontFamilyLgLookup),
        getClassName(f?.xl, fontFamilyXlLookup),
        typeof color !== 'object' && getClassName(color, colorLookup),
        getClassName(c?.base, colorLookup),
        getClassName(c?.md, colorMdLookup),
        getClassName(c?.lg, colorLgLookup),
        getClassName(c?.xl, colorXlLookup),
        typeof truncate !== 'object' && truncate && 'truncate',
        t?.base && 'truncate',
        t?.md && 'md:truncate',
        t?.lg && 'lg:truncate',
        t?.xl && 'xl:truncate',
        className
      )}
      {...rest}
    />
  );
};

export const Text = memo(forwardRef(Component));
