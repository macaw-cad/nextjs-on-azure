import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Navigation, NavigationLink } from './Navigation';

export default {
  title: 'Core/Components/Navigation',
  component: Navigation,
} as ComponentMeta<typeof Navigation>;

const NavigationWrapper: React.FC<{links: NavigationLink[], classname: string}> = ({links, classname}) => (
  <Navigation
    classname={classname}
    links={links}
  />
)

const Template: ComponentStory<typeof NavigationWrapper> = (args) => {
  return <NavigationWrapper {...args} />
}

export const NavigationStory = Template.bind({});
NavigationStory.storyName = 'Navigation';
NavigationStory.args = {
  classname: "",
  links: [
    {
      text: 'Home',
      url: "/"
    },
    {
      text: 'Category',
      children: [
        {
          text: 'Category A',
          url: "/cat1"
        },
        {
          text: 'Category with a long name',
          url: "/cat2"
        },
        {
          text: 'Category C',
          url: "/cat3"
        },
      ]
    },
    {
      text: 'All the products',
      children: [
        {
          text: 'product A',
          url: "/prodA"
        },
        {
          text: 'product B',
          url: "/prodB"
        },
      ]
    },
    {
      text: 'About us',
      url: "/about-us"
    },
  ],
};