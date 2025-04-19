import React from 'react';

interface HeaderProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle, children }) => {
  return (
    <header style={{ padding: '1.5rem', borderBottom: '1px solid #eee' }}>
      <h1 style={{ margin: 0, fontSize: '2rem' }}>{title}</h1>
      {subtitle && <p style={{ color: '#666' }}>{subtitle}</p>}
      {children}
    </header>
  );
};
