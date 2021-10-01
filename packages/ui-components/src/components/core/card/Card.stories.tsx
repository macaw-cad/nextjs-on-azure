import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from './Card';

export default {
  title: 'Core/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => {
  return (
    <div style={{width: "300px"}}> <Card {...args} /> </div>
  )  
}

export const CardWithImage = Template.bind({});
CardWithImage.args = {
    title: "Teaser!",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: {
        src: "https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        alt: "Laptop"
    }
};