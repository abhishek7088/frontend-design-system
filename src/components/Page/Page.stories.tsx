import type { Meta, StoryObj } from '@storybook/react';
import { Page } from './Page';

const meta: Meta<typeof Page> = {
  title: 'Components/Page',
  component: Page,
};

export default meta;
type Story = StoryObj<typeof Page>;

export const Default: Story = {
  args: {
    title: 'Welcome to the Page Component',
    description: 'This is a simple Page component to contain content.',
    children: <p>This is some content inside the page.</p>,
  },
};

export const WithCustomContent: Story = {
  args: {
    title: 'Custom Page Content',
    description: 'This page has custom content within it.',
    children: (
      <div>
        <h2>Subheading</h2>
        <p>This is a paragraph inside the page component.</p>
        <button>Click Me</button>
      </div>
    ),
  },
};
