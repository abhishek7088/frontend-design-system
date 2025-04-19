// src/components/Tabs/Tabs.tsx
import React, { useState } from 'react';
import './tabs.css';

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  items: TabItem[];
  defaultActiveId?: string;
  orientation?: 'horizontal' | 'vertical';
}

export const Tabs = ({ items, defaultActiveId, orientation = 'horizontal' }: TabsProps) => {
  const [activeId, setActiveId] = useState(defaultActiveId || items[0]?.id);

  return (
    <div className={`tabs-container ${orientation}`}>
      <div role="tablist" className="tabs-header">
        {items.map((item) => (
          <button
            key={item.id}
            role="tab"
            aria-selected={activeId === item.id}
            onClick={() => setActiveId(item.id)}
            className={`tab-button ${activeId === item.id ? 'active' : ''}`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {items.find((item) => item.id === activeId)?.content}
      </div>
    </div>
  );
};