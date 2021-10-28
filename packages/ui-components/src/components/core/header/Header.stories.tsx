import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from './Header';
import { NavigationStory } from '../navigation/Navigation.stories';
import { NavigationProps } from '../navigation/Navigation';

export default {
  title: 'Core/Components',
  component: Header,
  argTypes: {
  },
  decorators: [
    (Story) => (
      <div className="sb-fullwidth">
        <div className="page">
          {Story()}
        </div>
      </div>
    ),
  ],
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => {
  return (
    <Header {...args}/>
  )
}

export const HeaderStory = Template.bind({});
HeaderStory.storyName = 'Header';
HeaderStory.args = {
  image: { src: "sitecore-jss-azure-logo.png"},
  navigation: NavigationStory.args as NavigationProps,
};
