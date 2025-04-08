import type { Meta, StoryObj } from '@storybook/react';
 
import { Button } from './button.tsx';
 
const meta: Meta<typeof Button> = {
  component: Button,
};
 
export default meta;
type Story = StoryObj<typeof Button>;
 
export const Primary: Story = {
  args: { 
    children: 'Primary Button',
   },
};

export const Secondary: Story = {
  args: { 
    children: 'Secondary Button',
    variant: 'secondary',
   },
};

export const Destructive: Story = {
  args: { 
    children: 'Destructive Button',
    variant: 'destructive',
   },
};
