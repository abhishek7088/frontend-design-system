// src/components/Button/Button.tsx
import React from 'react';
import classNames from 'classnames';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
}) => {
  const baseStyles = 'rounded font-semibold focus:outline-none transition';

  const variantStyles: Record<string, string> = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    outline: 'border border-gray-600 text-gray-600 hover:bg-gray-100',
  };

  const sizeStyles: Record<string, string> = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-3 text-lg',
  };

  const classes = classNames(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size]
  );

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};
