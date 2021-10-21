import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Pagelayout } from './Pagelayout';

export default {
  title: 'Core/Components',
  component: Pagelayout,
  decorators: [
    (Story) => (
      <div className="sb-fullwidth">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Pagelayout>;

const Template: ComponentStory<typeof Pagelayout> = (args) => {
  return (
    <Pagelayout {...args}>
    </Pagelayout>
  )  
}

export const PagelayoutStory = Template.bind({});
PagelayoutStory.storyName = 'Pagelayout';
PagelayoutStory.args = {
};
