import { ComponentPropsWithRef, forwardRef, Ref } from 'react';
import { PiSpinnerBold } from 'react-icons/pi';
import {
  colorLookup,
  fieldSize2XlLookup,
  fieldSizeLgLookup,
  fieldSizeLookup,
  fieldSizeMdLookup,
  fieldSizeXlLookup,
  fontFamilyLookup,
  fontSize2xlLookup,
  fontSizeLgLookup,
  fontSizeLookup,
  fontSizeMdLookup,
  fontSizeXlLookup,
  fontWeight2xlLookup,
  fontWeightLgLookup,
  fontWeightLookup,
  fontWeightMdLookup,
  fontWeightXlLookup,
  radiusLgLookup,
  radiusLookup,
  radiusMdLookup,
  radiusXlLookup,
} from '../theme';
import { getClassName, memo } from '../utils';
import { cn } from '../libs';
import { Responsive } from '../types/ui';

const variantLookup = {
  primary:
    'text-primary-foreground bg-primary hover:bg-primary/90 disabled:text-primary-foreground/70 disabled:bg-primary/50',
  outline:
    'border text-primary bg-primary-foreground hover:bg-neutral-50 disabled:text-primary/70 disabled:bg-neutral-50/50',
  pill: 'text-primary-foreground bg-primary hover:bg-primary/90 disabled:text-primary-foreground/70 disabled:bg-primary/50',
};

export type Variant = keyof typeof variantLookup;
export type ButtonSize = keyof typeof fieldSizeLookup;
export type Font = keyof typeof fontFamilyLookup;
export type ButtonColor = keyof typeof colorLookup;
export type Radius = keyof typeof radiusLookup;
export type Weight = keyof typeof fontWeightLookup;
export type FontSize = keyof typeof fontSizeLookup;

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  variant?: Variant;
  radius?: Radius | Responsive<Radius>;
  size?: ButtonSize | Responsive<ButtonSize>;
  font?: Font | Responsive<Font>;
  fontSize?: FontSize | Responsive<FontSize>;
  weight?: Weight | Responsive<Weight>;
  isLoading?: boolean;
  color?: ButtonColor;
}

const Component = (
  {
    variant = 'primary',
    radius = 'lg',
    size = 'lg',
    font = 'inter',
    fontSize = 'base',
    weight = 'semibold',
    color,
    isLoading,
    className,
    type = 'button',
    children,
    ...rest
  }: ButtonProps,
  ref: Ref<HTMLButtonElement>
) => {
  const fs = fontSize as any;
  const w = weight as any;
  const s = size as any;
  const r = radius as any;

  return (
    <button
      ref={ref}
      className={cn(
        'h-14 px-8 inline-flex w-full items-center justify-center gap-2 transition-colors disabled:cursor-not-allowed text-primary-foreground cursor-pointer!',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30',
        typeof fontSize !== 'object' && getClassName(fontSize, fontSizeLookup),
        getClassName(fs?.base, fontSizeLookup),
        getClassName(fs?.md, fontSizeMdLookup),
        getClassName(fs?.lg, fontSizeLgLookup),
        getClassName(fs?.xl, fontSizeXlLookup),
        getClassName(fs?.['2xl'], fontSize2xlLookup),
        typeof weight !== 'object' && getClassName(weight, fontWeightLookup),
        getClassName(w?.base, fontWeightLookup),
        getClassName(w?.md, fontWeightMdLookup),
        getClassName(w?.lg, fontWeightLgLookup),
        getClassName(w?.xl, fontWeightXlLookup),
        getClassName(w?.['2xl'], fontWeight2xlLookup),
        typeof size !== 'object' && getClassName(size, fieldSizeLookup),
        getClassName(s?.base, fieldSizeLookup),
        getClassName(s?.md, fieldSizeMdLookup),
        getClassName(s?.lg, fieldSizeLgLookup),
        getClassName(s?.xl, fieldSizeXlLookup),
        getClassName(s?.['2xl'], fieldSize2XlLookup),
        typeof radius !== 'object' && getClassName(radius, radiusLookup),
        getClassName(r?.base, radiusLookup),
        getClassName(r?.md, radiusMdLookup),
        getClassName(r?.lg, radiusLgLookup),
        getClassName(r?.xl, radiusXlLookup),
        variantLookup[variant],
        fontFamilyLookup[font as Font], // Cast needed if font is responsive, but here it seems simple. Wait, original component had responsive fonts? No, JSDoc says Font is just string. But Box does support responsive.
        // Checking original: font={...} is passed to getClassName(font, ...) in Text, but here it is passed directly: fontFamilyLookup[font].
        // So in Button, font is NOT responsive in the original code.
        color && colorLookup[color],
        className
      )}
      type={type}
      {...(isLoading && { disabled: true })}
      {...rest}
    >
      {isLoading ? <PiSpinnerBold className="animate-spin size-5 m-auto" /> : children}
    </button>
  );
};

export const Button = memo(forwardRef(Component));
