import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Item from './Item';
import { EXAMPLE_GAME } from '../../types/Game/mock/data';

export default {
  title: 'Item',
  component: Item,
} as ComponentMeta<typeof Item>;

const Template: ComponentStory<typeof Item> = (args) => <Item {...args} />;

export const Default = Template.bind({});

Default.args = {
  game: EXAMPLE_GAME,
};
