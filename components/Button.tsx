
import React, { forwardRef, useState, useEffect, useRef, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
// Note: Framer Motion is not used here to keep dependencies minimal for this environment.
// import { motion } from 'framer-motion'; 
// Note: Radix Slot is the recommended way for `asChild`. This is a simplified version.
// import { Slot } from '@radix-ui/react-slot';

import { ButtonProps, ButtonVariant, ButtonSize, IconPosition } from '../types';
import { iconMap, LoaderIcon, DEFAULT_DEBOUNCE_TIME, DEFAULT_DOUBLE_CLICK_PREVENTION_TIME } from '../constants';
import { useBookmezaTheme } from '../contexts/ThemeContext';

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = ButtonVariant.Primary,
      size = ButtonSize.Medium,
      fullWidth = false,
      isLoading = false,
      loadingText: loadingTextProp,
      disabled = false,
      icon: iconProp,
      iconName,
      iconPosition = 'left',
      children,
      textKey,
      asChild = false, // Simplified handling. Use Radix Slot for production.
      href,
      onClick,
      debounceTime = 0,
      preventDoubleClick = false,
      className = '',
      iconClassName = '',
      loadingClassName = '',
      leftSlot,
      rightSlot,
      beforeIcon,
      afterIcon,
      type = 'button',
      autoFocus,
      ...props
    },
    ref
  ) => {
    const { t } = useTranslation();
    const theme = useBookmezaTheme();
    const buttonTheme = theme?.components?.Button;

    const [isSubmitting, setIsSubmitting] = useState(false);
    const clickTimeoutRef = useRef<number | null>(null); // Changed NodeJS.Timeout to number
    const actualDebounceTime = debounceTime > 0 ? debounceTime : (preventDoubleClick ? DEFAULT_DOUBLE_CLICK_PREVENTION_TIME : 0);

    useEffect(() => {
      return () => {
        if (clickTimeoutRef.current) {
          clearTimeout(clickTimeoutRef.current);
        }
      };
    }, []);

    const isDisabled = disabled || isLoading || isSubmitting;

    const IconComponent = useMemo(() => {
      if (iconProp) return iconProp;
      if (iconName && iconMap[iconName]) return React.createElement(iconMap[iconName]);
      return null;
    }, [iconProp, iconName]);
    
    const loadingText = loadingTextProp || t('loading');

    const defaultBaseClasses = `
      inline-flex items-center justify-center font-medium
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bookmeza-primary-start
      dark:focus:ring-offset-bookmeza-slate-900
      transition-all duration-200 ease-in-out
      disabled:opacity-60 disabled:cursor-not-allowed
      active:scale-95
      rounded-lg
    `;
    
    const baseClasses = buttonTheme?.baseClasses ?? defaultBaseClasses;

    const getDefaultVariantClasses = (currentVariant: ButtonVariant) => {
      switch (currentVariant) {
        case ButtonVariant.Primary:
          return `bg-gradient-to-r from-bookmeza-primary-start to-bookmeza-primary-end text-white shadow-lg hover:shadow-xl hover:from-bookmeza-primary-end hover:to-bookmeza-primary-start disabled:from-bookmeza-slate-300 disabled:to-bookmeza-slate-400 dark:disabled:from-bookmeza-slate-500 dark:disabled:to-bookmeza-slate-600`;
        case ButtonVariant.Secondary:
          return `bg-gradient-to-r from-bookmeza-secondary-start to-bookmeza-secondary-end text-white shadow-lg hover:shadow-xl hover:from-bookmeza-secondary-end hover:to-bookmeza-secondary-start disabled:from-bookmeza-slate-300 disabled:to-bookmeza-slate-400 dark:disabled:from-bookmeza-slate-500 dark:disabled:to-bookmeza-slate-600`;
        case ButtonVariant.Danger:
          return `bg-gradient-to-r from-bookmeza-error-start to-bookmeza-error-end text-white shadow-lg hover:shadow-xl hover:from-bookmeza-error-end hover:to-bookmeza-error-start disabled:from-bookmeza-slate-300 disabled:to-bookmeza-slate-400 dark:disabled:from-bookmeza-slate-500 dark:disabled:to-bookmeza-slate-600`;
        case ButtonVariant.Success:
           return `bg-gradient-to-r from-bookmeza-success-start to-bookmeza-success-end text-white shadow-lg hover:shadow-xl hover:from-bookmeza-success-end hover:to-bookmeza-success-start disabled:from-bookmeza-slate-300 disabled:to-bookmeza-slate-400 dark:disabled:from-bookmeza-slate-500 dark:disabled:to-bookmeza-slate-600`;
        case ButtonVariant.Warning:
          return `bg-gradient-to-r from-bookmeza-warning-start to-bookmeza-warning-end text-bookmeza-slate-900 shadow-lg hover:shadow-xl hover:from-bookmeza-warning-end hover:to-bookmeza-warning-start disabled:from-bookmeza-slate-300 disabled:to-bookmeza-slate-400 disabled:text-bookmeza-slate-500 dark:disabled:from-bookmeza-slate-500 dark:disabled:to-bookmeza-slate-600`;
        case ButtonVariant.Info:
          return `bg-gradient-to-r from-bookmeza-info-start to-bookmeza-info-end text-white shadow-lg hover:shadow-xl hover:from-bookmeza-info-end hover:to-bookmeza-info-start disabled:from-bookmeza-slate-300 disabled:to-bookmeza-slate-400 dark:disabled:from-bookmeza-slate-500 dark:disabled:to-bookmeza-slate-600`;
        case ButtonVariant.Ghost:
          return `bg-transparent text-bookmeza-primary-start hover:bg-bookmeza-primary-start/10 dark:text-bookmeza-primary-start dark:hover:bg-bookmeza-primary-start/20 border border-transparent hover:border-bookmeza-primary-start/30 disabled:text-bookmeza-slate-400 dark:disabled:text-bookmeza-slate-500 disabled:hover:bg-transparent`;
        case ButtonVariant.Glass:
          return `bg-bookmeza-glass text-bookmeza-slate-900 shadow-glass backdrop-blur-sm hover:bg-bookmeza-glass-hover hover:shadow-glass-lg dark:bg-slate-700/70 dark:text-white dark:hover:bg-slate-600/80 disabled:bg-slate-200/70 dark:disabled:bg-slate-600/50`;
        default:
          return `bg-gradient-to-r from-bookmeza-primary-start to-bookmeza-primary-end text-white shadow-lg hover:shadow-xl`;
      }
    };
    
    const variantClasses = buttonTheme?.variantClasses?.[variant] ?? getDefaultVariantClasses(variant);

    const getDefaultSizeClasses = (currentSize: ButtonSize) => {
      switch (currentSize) {
        case ButtonSize.Small:
          return 'px-3 py-1.5 text-xs rounded-md';
        case ButtonSize.Medium:
          return 'px-4 py-2 text-sm rounded-lg';
        case ButtonSize.Large:
          return 'px-6 py-3 text-base rounded-xl';
        default:
          return 'px-4 py-2 text-sm rounded-lg';
      }
    };

    const sizeClasses = buttonTheme?.sizeClasses?.[size] ?? getDefaultSizeClasses(size);


    const combinedClassName = [
      baseClasses,
      variantClasses,
      sizeClasses,
      fullWidth ? 'w-full' : '',
      className,
    ].filter(Boolean).join(' ').trim().replace(/\s+/g, ' ');

    const handleClick = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      if (isDisabled || !onClick) return;

      if (actualDebounceTime > 0) {
        if (clickTimeoutRef.current) {
          clearTimeout(clickTimeoutRef.current);
        }
        if (preventDoubleClick) {
          setIsSubmitting(true);
        }
        clickTimeoutRef.current = window.setTimeout(() => { // Ensure window.setTimeout for number return type
          onClick(event as React.MouseEvent<HTMLButtonElement>);
          if (preventDoubleClick) {
            setIsSubmitting(false);
          }
          clickTimeoutRef.current = null;
        }, actualDebounceTime);
      } else {
        onClick(event as React.MouseEvent<HTMLButtonElement>);
      }
    };
    
    const content = textKey ? t(textKey) : children;

    const iconSpan = IconComponent && (
      <span className={`inline-flex items-center ${iconClassName}`}>
        {isLoading ? (
          <LoaderIcon className={`h-4 w-4 ${loadingClassName}`} />
        ) : (
          <>
            {beforeIcon}
            {IconComponent}
            {afterIcon}
          </>
        )}
      </span>
    );

    const Comp: React.ElementType = asChild ? 'span' : (href ? 'a' : 'button');

    const commonProps: Record<string, any> = {
      ref: ref, 
      className: combinedClassName,
      disabled: isDisabled,
      onClick: (Comp === 'button' || Comp === 'a') ? handleClick : undefined,
      href: Comp === 'a' ? href : undefined,
      target: Comp === 'a' && href && (props.target !== undefined ? props.target : (href.startsWith('http') ? '_blank' : undefined)),
      rel: Comp === 'a' && href && (props.rel !== undefined ? props.rel : (href.startsWith('http') ? 'noopener noreferrer' : undefined)),
      role: (Comp === 'button' || Comp === 'a') ? 'button' : undefined,
      'aria-label': props['aria-label'] || (typeof content === 'string' ? content : undefined),
      'aria-busy': isLoading,
      'aria-disabled': isDisabled,
      tabIndex: isDisabled ? -1 : props.tabIndex,
      autoFocus,
      ...props, // Spreads the rest of the props passed to Button
    };
    
    if (Comp === 'button') {
      commonProps.type = type;
    }


    if (asChild && React.isValidElement(children)) {
        const childElement = children as React.ReactElement<any>; // Cast for props access and cloneElement
        const childProps = {
            ...commonProps,
            ...childElement.props,
            // Ensure Button's className and onClick logic take precedence or are correctly merged.
            className: [combinedClassName, childElement.props.className].filter(Boolean).join(' ').trim().replace(/\s+/g, ' '),
            onClick: handleClick, // Button's onClick (with debounce/preventDoubleClick)
        };
        return React.cloneElement(childElement, childProps);
    }
    
    const textSpanClassName = iconSpan ? (iconPosition === 'left' ? 'ms-2' : 'me-2') : '';

    return (
      <Comp {...commonProps}>
        {leftSlot}
        {iconPosition === 'left' && iconSpan}
        {isLoading && loadingText ? (
          <span className={textSpanClassName}>{loadingText}</span>
        ) : (
          <span className={textSpanClassName}>{content}</span>
        )}
        {iconPosition === 'right' && iconSpan}
        {rightSlot}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export default Button;
