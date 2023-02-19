import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Table from './Table';
import { EXAMPLE_GAME } from '../../types/Game/mock/data';

export default {
  title: 'Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({});

Default.args = {
  games: [EXAMPLE_GAME, EXAMPLE_GAME, EXAMPLE_GAME, EXAMPLE_GAME],
};
