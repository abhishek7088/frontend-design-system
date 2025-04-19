import React from "react";
import "./Navigation.css";

type NavigationProps = {
  items: { label: string; href: string }[];
};

const Navigation: React.FC<NavigationProps> = ({ items }) => {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        {items.map((item, index) => (
          <li key={index} className="nav-item">
            <a href={item.href} className="nav-link">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
