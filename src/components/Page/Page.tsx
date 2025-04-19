import React from 'react';

interface PageProps {
  children?: React.ReactNode;
  title: string;
  description?: string;
}

export const Page: React.FC<PageProps> = ({ title, description, children }) => {
  return (
    <div style={{ padding: '2rem', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <header style={{ borderBottom: '1px solid #ddd', paddingBottom: '1rem' }}>
        <h1>{title}</h1>
        {description && <p style={{ color: '#777' }}>{description}</p>}
      </header>
      <main>{children}</main>
    </div>
  );
};
