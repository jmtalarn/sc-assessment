import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FilterInput from './FilterInput';

export default {
  title: 'FilterInput',
  component: FilterInput,
} as ComponentMeta<typeof FilterInput>;

const Template: ComponentStory<typeof FilterInput> = (args) => <FilterInput {...args} />;

export const Default = Template.bind({});

Default.args = {};
