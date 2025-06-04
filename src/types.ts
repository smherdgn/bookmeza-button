import React from 'react';

export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  Ghost = 'ghost',
  Danger = 'danger',
  Success = 'success',
  Warning = 'warning',
  Info = 'info',
  Glass = 'glass',
}

export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export type IconPosition = 'left' | 'right';

// Omit conflicting event handlers from ButtonHTMLAttributes and re-declare them with a union type.
// This allows the Button component to be used more flexibly as either a <button> or an <a>.
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'onCopy' | 'onCut' | 'onPaste'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  // `disabled` is already part of React.ButtonHTMLAttributes<HTMLButtonElement>
  icon?: React.ReactNode;
  iconName?: string; // For resolving icons from a map
  iconPosition?: IconPosition;
  children?: React.ReactNode;
  textKey?: string; // For i18n
  asChild?: boolean; // Note: True polymorphism requires a library like Radix Slot. This impl will be simplified.
  href?: string; // If present, renders as <a> tag
  debounceTime?: number;
  preventDoubleClick?: boolean;
  className?: string;
  iconClassName?: string;
  loadingClassName?: string;
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
  beforeIcon?: React.ReactNode;
  afterIcon?: React.ReactNode;
  'data-testid'?: string;
  'data-cy'?: string;
  'data-qa'?: string;
  'data-dev'?: string;

  // Anchor-specific attributes, also allowing them on ButtonProps for easier usage.
  target?: string;
  rel?: string;
  // download?: any; // Could be added if needed for <a>

  // Overridden event handlers for broader compatibility
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  onCopy?: React.ClipboardEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  onCut?: React.ClipboardEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  onPaste?: React.ClipboardEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  // For a fully robust polymorphic component, more event handlers might need this treatment
  // if they have differing signatures or are not universally applicable.
}

// Theme-related types
export interface ButtonThemeProps {
  baseClasses?: string;
  variantClasses?: {
    [key in ButtonVariant]?: string;
  };
  sizeClasses?: {
    [key in ButtonSize]?: string;
  };
  // Could also include fullWidthClass, loadingIconClass, etc.
}

export interface AppTheme {
  components?: {
    Button?: ButtonThemeProps;
  };
  // Other global theme properties like colors, typography can be added
  // For this example, we focus on component-specific theme overrides.
}