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
    'cursor-pointer inline-flex items-center justify-center rounded-lg font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeClasses =
    size === 'l'
      ? 'text-base px-5 gap-1 h-12 min-w-[100px]'
      : size === 'm'
      ? 'text-sm px-4 gap-1 h-10 min-w-[80px]'
      : 'text-xs px-3 gap-1 h-8 min-w-[60px]';

  const variantClasses =
    variant === 'contained'
      ? 'bg-indigo-500 text-white hover:bg-indigo-600 active:bg-indigo-700'
      : variant === 'outlined'
      ? 'border border-gray-300 text-gray-900 hover:bg-indigo-50 hover:text-indigo-500 hover:border-indigo-500 active:bg-indigo-100 active:text-indigo-700 active:border-indigo-700'
      : 'text-gray-900 hover:bg-indigo-50 hover:text-indigo-500 active:bg-indigo-100 active:text-indigo-700';

  const finalClassName = `${baseClasses} ${sizeClasses} ${variantClasses} ${
    disabled ? 'disabled:pointer-events-none' : ''
  }`;

  return (
    <button className={finalClassName} disabled={disabled} {...props}>
      {iconL && <span className="h-4 w-4 flex items-center justify-center *:h-4 *:w-4">{iconL}</span>}
      <span>{children}</span>
      {iconR && <span className="h-4 w-4 flex items-center justify-center *:h-4 *:w-4">{iconR}</span>}
    </button>
  );
};