import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Accordeon } from './Accordeon';

export default {
  title: 'Core/Components',
  component: Accordeon,
  argTypes: {
  },
} as ComponentMeta<typeof Accordeon>;

const Template: ComponentStory<typeof Accordeon> = (args) => {
  return (
    <>
      <Accordeon {...args}/>
      <Accordeon {...args}/>
      <Accordeon {...args}/>
    </>
  )
}

export const AccordeonStory = Template.bind({});
AccordeonStory.storyName = 'Accordeon';
AccordeonStory.args = {
  summary: 'weqrwerwer'
};
