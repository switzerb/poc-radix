import type {Meta, StoryObj} from '@storybook/react';
import {RadioGroup, RadioGroupItem} from './radio-button';

const meta: Meta<typeof RadioGroup> = {
    component: RadioGroup,
};
export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Primary: Story = {
    render: () => (<RadioGroup defaultValue="option-one">
        <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one" />
            <label className="Label" htmlFor="option-one">
                Default
            </label>
        </div>
        <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" />
            <label className="Label" htmlFor="option-two">
                Something
            </label>
        </div>
    </RadioGroup>)
};