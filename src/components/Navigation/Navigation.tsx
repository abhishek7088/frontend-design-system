import React from "react";

type NavigationProps = {
  items: { label: string; href: string }[];
  orientation?: "horizontal" | "vertical";
};

const Navigation: React.FC<NavigationProps> = ({ items, orientation = "horizontal" }) => {
  return (
    <nav aria-label="Main Navigation">
      <ul
        className={`flex ${
          orientation === "vertical" ? "flex-col" : "flex-row"
        } gap-4 flex-wrap`}
      >
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className="px-4 py-2 rounded-full bg-white text-blue-600 hover:bg-blue-500 hover:text-white shadow transition-all"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
