import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'radio', options: ['confirm', 'cancel', 'edit', 'remove', 'create', null] },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'Label',
};
