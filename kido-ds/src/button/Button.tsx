import React from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonSize = 'l' | 'm' | 's';
type ButtonVariant = 'contained' | 'outlined' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  disabled?: boolean;
  iconL?: ReactNode;
  iconR?: ReactNode;
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  size = 'm',
  variant = 'contained',
  disabled = false,
  iconL,
  iconR,
  children,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center rounded-xl font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeClasses =
    size === 'l'
      ? 'text-base px-6 py-3 gap-2'
      : size === 'm'
      ? 'text-sm px-4 py-2 gap-2'
      : 'text-xs px-3 py-1.5 gap-1.5';

  const variantClasses =
    variant === 'contained'
      ? 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus-visible:ring-blue-500'
      : variant === 'outlined'
      ? 'border border-blue-600 text-blue-600 hover:bg-blue-50 active:bg-blue-100 focus-visible:ring-blue-500'
      : 'text-blue-600 hover:bg-blue-50 active:bg-blue-100 focus-visible:ring-blue-500';

  const finalClassName = `${baseClasses} ${sizeClasses} ${variantClasses} ${
    disabled ? 'disabled:pointer-events-none' : ''
  }`;

  return (
    <button className={finalClassName} disabled={disabled} {...props}>
      {iconL && <span className="h-5 w-5 flex items-center justify-center *:h-5 *:w-5">{iconL}</span>}
      <span>{children}</span>
      {iconR && <span className="h-5 w-5 flex items-center justify-center *:h-5 *:w-5">{iconR}</span>}
    </button>
  );
};