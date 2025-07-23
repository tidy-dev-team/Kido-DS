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
        'cursor-pointer inline-flex items-center justify-center rounded-lg font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 disabled:cursor-not-allowed';

    const sizeClasses =
        size === 'l'
            ? 'text-base px-5 gap-1 h-12 min-w-[100px] *:size-[20px]'
            : size === 'm'
                ? 'text-base px-4 gap-1 h-10 min-w-[80px] *:size-[20px]'
                : 'text-sm px-3 gap-1 h-8 min-w-[60px] *:size-[16px]';

    const variantClasses =
        variant === 'contained'
            ? 'bg-indigo-500 text-white hover:bg-indigo-600 active:bg-indigo-700 disabled:bg-gray-300 disabled:text-gray-400'
            : variant === 'outlined'
                ? 'border border-gray-300 text-gray-900 hover:bg-indigo-50 hover:text-indigo-500 hover:border-indigo-500 active:bg-indigo-100 active:text-indigo-700 active:border-indigo-700 disabled:border-gray-300 disabled:text-gray-400'
                : 'text-gray-900 hover:bg-indigo-50 hover:text-indigo-500 active:bg-indigo-100 active:text-indigo-700 disabled:text-gray-400';

    const finalClassName = `${baseClasses} ${sizeClasses} ${variantClasses} ${disabled ? 'disabled:pointer-events-none' : ''
        }`;

    return (
        <button className={finalClassName} disabled={disabled} {...props}>
            {iconL && <span className="flex items-center justify-center">{iconL}</span>}
            <span className="min-w-fit min-h-fit">{children}</span>
            {iconR && <span className="flex items-center justify-center">{iconR}</span>}
        </button>
    );
};