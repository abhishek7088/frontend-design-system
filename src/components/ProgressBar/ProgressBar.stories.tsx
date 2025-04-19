
import { Meta, StoryObj } from "@storybook/react";
import ProgressBar, { ProgressBarProps } from "./ProgressBar";

const meta: Meta<typeof ProgressBar> = {
  title: "Components/Data Display/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
  args: {
    value: 45,
    max: 100,
    size: "md",
    color: "primary",
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "grid", gap: "1rem" }}>
      <ProgressBar {...args} size="sm" />
      <ProgressBar {...args} size="md" />
      <ProgressBar {...args} size="lg" />
    </div>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <div style={{ display: "grid", gap: "1rem" }}>
      {["primary", "secondary", "success", "warning", "error"].map((color) => (
        <ProgressBar key={color} {...args} color={color as ProgressBarProps["color"]} />
      ))}
    </div>
  ),
};
