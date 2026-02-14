import React from 'react';
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

/**
 * @typedef {'base' | 'md' | 'lg' | 'xl' | '2xl'} Breakpoint
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
 *   | 40} Gap
 *
 *
 * @typedef {'xs'
 *   | 'sm'
 *   | 'base'
 *   | 'lg'
 *   | 'xl'
 *   | '2xl'
 *   | '3xl'
 *   | '4xl'
 *   | '5xl'
 *   | '6xl'
 *   | '7xl'
 *   | '8xl'
 *   | '9xl'} Size
 *
 *
 * @typedef {'thin'
 *   | 'extralight'
 *   | 'light'
 *   | 'normal'
 *   | 'medium'
 *   | 'semibold'
 *   | 'bold'
 *   | 'extrabold'
 *   | 'black'} Weight
 *
 *
 * @typedef {'primary' | 'secondary' | 'success' | 'danger'} Color
 *
 * @typedef {object} ComponentProps
 * @property {string} label
 * @property {Size | Record<Breakpoint, Size>} [labelFontSize]
 * @property {Weight | Record<Breakpoint, Weight>} [labelFontWeight]
 * @property {Color} [labelColor]
 * @property {string} [labelClass]
 * @property {Gap | Record<Breakpoint, Gap>} [gap]
 * @property {string} [error]
 * @property {Size | Record<Breakpoint, Size>} [errorFontSize]
 * @property {Weight | Record<Breakpoint, Weight>} [errorFontWeight]
 * @property {Color} [errorColor]
 * @property {string} [className]
 * @property {boolean | Record<Breakpoint, boolean>} [hide]
 * @property {boolean | Record<Breakpoint, boolean>} [hideLabel]
 * @param {React.PropsWithChildren<ComponentProps>} props
 * @returns {JSX.Element}
 */

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
}) => {
  const id = React.useId();
  const markup = typeof children === 'function' ? children(id) : children;

  return (
    <div
      className={cn(
        'flex flex-col w-full',
        typeof gap !== 'object' && getClassName(gap, gapLookup),
        getClassName(gap?.base, gapLookup),
        getClassName(gap?.md, gapMdLookup),
        getClassName(gap?.lg, gapLgLookup),
        getClassName(gap?.xl, gapXlLookup),
        typeof hide !== 'object' && hide === true ? 'hidden' : hide === false && 'block',
        hide?.base === true ? 'hidden' : hide?.base === false && 'block',
        hide?.md === true ? 'md:hidden' : hide?.md === false && 'md:block',
        hide?.lg === true ? 'lg:hidden' : hide?.lg === false && 'lg:block',
        typeof className !== 'object' && className
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
              hideLabel?.base === true ? 'hidden' : hideLabel?.base === false && 'block',
              hideLabel?.md === true ? 'md:hidden' : hideLabel?.md === false && 'md:block',
              hideLabel?.lg === true ? 'lg:hidden' : hideLabel?.lg === false && 'lg:block',
              typeof labelFontSize !== 'object' && getClassName(labelFontSize, fontSizeLookup),
              getClassName(labelFontSize?.base, fontSizeLookup),
              getClassName(labelFontSize?.md, fontSizeMdLookup),
              getClassName(labelFontSize?.lg, fontSizeLgLookup),
              getClassName(labelFontSize?.xl, fontSizeXlLookup),
              getClassName(labelFontSize?.['2xl'], fontSize2xlLookup),
              typeof labelFontWeight !== 'object' &&
                getClassName(labelFontWeight, fontWeightLookup),
              getClassName(labelFontWeight?.base, fontWeightLookup),
              getClassName(labelFontWeight?.md, fontWeightMdLookup),
              getClassName(labelFontWeight?.lg, fontWeightLgLookup),
              getClassName(labelFontWeight?.xl, fontWeightXlLookup),
              getClassName(labelFontWeight?.['2xl'], fontWeight2xlLookup),
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
