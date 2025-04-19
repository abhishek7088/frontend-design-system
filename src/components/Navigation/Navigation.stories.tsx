// import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Navigation from "./Navigation";

const meta: Meta<typeof Navigation> = {
  title: "Components/Navigation",
  component: Navigation,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "radio",
      options: ["horizontal", "vertical"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Horizontal: Story = {
  args: {
    items: [
      { label: "Home", href: "#" },
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
    ],
    orientation: "horizontal",
  },
};

export const Vertical: Story = {
  args: {
    items: [
      { label: "Dashboard", href: "#" },
      { label: "Settings", href: "#" },
      { label: "Profile", href: "#" },
    ],
    orientation: "vertical",
  },
};
