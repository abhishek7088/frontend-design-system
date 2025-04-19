// src/components/Badge/Badge.tsx
import React from 'react';
import './badge.css';

type BadgeVariant = 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';

interface BadgeProps {
  variant?: BadgeVariant;
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Badge = ({ variant = 'primary', size = 'md', children }: BadgeProps) => {
  return (
    <span className={`badge badge-${variant} badge-${size}`}>
      {children}
    </span>
  );
};