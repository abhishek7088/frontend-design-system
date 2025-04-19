import React from "react";
import "./navigation.css";

type NavigationProps = {
  items: { label: string; href: string }[];
  orientation?: "horizontal" | "vertical";
};

const Navigation: React.FC<NavigationProps> = ({
  items,
  orientation = "horizontal",
}) => {
  return (
    <nav className="navigation" aria-label="Main Navigation">
      <ul className={`nav-list ${orientation === "vertical" ? "flex-col" : ""}`}>
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
