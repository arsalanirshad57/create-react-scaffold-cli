import { ReactNode, useId } from 'react';
import {
  fontSizeLookup,
  fontSizeMdLookup,
  fontSizeLgLookup,
  fontWeightLookup,
  fontWeightMdLookup,
  fontWeightLgLookup,
  gapLookup,
  gapMdLookup,
  gapLgLookup,
  gapXlLookup,
  fontSizeXlLookup,
  fontWeightXlLookup,
  fontSize2xlLookup,
  fontWeight2xlLookup,
  colorLookup,
} from '../theme';
import { Text } from './Text';
import { getClassName, memo } from '../utils';
import { cn } from '../libs';
import { Responsive } from '../types/ui';

export type Gap = keyof typeof gapLookup;
export type Size = keyof typeof fontSizeLookup;
export type Weight = keyof typeof fontWeightLookup;
export type Color = keyof typeof colorLookup;

export interface FormFieldProps {
  label?: string;
  labelFontSize?: Size | Responsive<Size>;
  labelFontWeight?: Weight | Responsive<Weight>;
  labelColor?: Color;
  labelClass?: string;
  gap?: Gap | Responsive<Gap>;
  error?: string;
  errorFontSize?: Size | Responsive<Size>;
  errorFontWeight?: Weight | Responsive<Weight>;
  errorColor?: Color | Responsive<Color>;
  className?: string; // Type mismatch in original JSDoc vs Usage?
  // Original JSDoc said className overrides? No, just passed.
  // Actually JSDoc said className property but destructured className...
  hide?: boolean | Responsive<boolean>;
  hideLabel?: boolean | Responsive<boolean>;
  children: ReactNode | ((id: string) => ReactNode);
}

const Component = ({
  label,
  labelFontSize,
  labelFontWeight,
  labelColor,
  labelClass,
  gap = 2,
  hide,
  hideLabel,
  error,
  errorFontSize = 'xs',
  errorFontWeight = 'medium',
  errorColor = 'danger',
  className,
  children,
}: FormFieldProps) => {
  const id = useId();
  const markup = typeof children === 'function' ? children(id) : children;

  const g = gap as any;
  const h = hide as any;
  const hl = hideLabel as any;
  const lfs = labelFontSize as any;
  const lfw = labelFontWeight as any;

  return (
    <div
      className={cn(
        'flex flex-col w-full',
        typeof gap !== 'object' && getClassName(gap, gapLookup),
        getClassName(g?.base, gapLookup),
        getClassName(g?.md, gapMdLookup),
        getClassName(g?.lg, gapLgLookup),
        getClassName(g?.xl, gapXlLookup),
        typeof hide !== 'object' && hide === true ? 'hidden' : hide === false && 'block',
        h?.base === true ? 'hidden' : h?.base === false && 'block',
        h?.md === true ? 'md:hidden' : h?.md === false && 'md:block',
        h?.lg === true ? 'lg:hidden' : h?.lg === false && 'lg:block',
        typeof className === 'string' && className
      )}
    >
      {label && (
        <div>
          <label
            htmlFor={id}
            className={cn(
              'font-inter',
              typeof hideLabel !== 'object' && hideLabel === true
                ? 'hidden'
                : hideLabel === false && 'block',
              hl?.base === true ? 'hidden' : hl?.base === false && 'block',
              hl?.md === true ? 'md:hidden' : hl?.md === false && 'md:block',
              hl?.lg === true ? 'lg:hidden' : hl?.lg === false && 'lg:block',
              typeof labelFontSize !== 'object' && getClassName(labelFontSize, fontSizeLookup),
              getClassName(lfs?.base, fontSizeLookup),
              getClassName(lfs?.md, fontSizeMdLookup),
              getClassName(lfs?.lg, fontSizeLgLookup),
              getClassName(lfs?.xl, fontSizeXlLookup),
              getClassName(lfs?.['2xl'], fontSize2xlLookup),
              typeof labelFontWeight !== 'object' &&
                getClassName(labelFontWeight, fontWeightLookup),
              getClassName(lfw?.base, fontWeightLookup),
              getClassName(lfw?.md, fontWeightMdLookup),
              getClassName(lfw?.lg, fontWeightLgLookup),
              getClassName(lfw?.xl, fontWeightXlLookup),
              getClassName(lfw?.['2xl'], fontWeight2xlLookup),
              getClassName(labelColor, colorLookup),
              labelClass
            )}
          >
            {label}
          </label>
        </div>
      )}
      <div className="-mt-1!">{markup}</div>
      {error && (
        <div>
          <Text
            size={errorFontSize}
            weight={errorFontWeight}
            color={errorColor}
            className="font-inter"
          >
            {error}
          </Text>
        </div>
      )}
    </div>
  );
};

export const FormField = memo(Component);
