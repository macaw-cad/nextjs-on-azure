import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from './Card';

export default {
  title: 'Core/Components/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Card>;

const CardWrapper: React.FC<{title: string, image: string, description: string}> = ({title, image, description}) => (
  <Card 
    title={<>{title}</>}
    description={<>description</>}
    image={<img src={image} />}
  />
)

const Template: ComponentStory<typeof CardWrapper> = (args) => {
  return (
    <div style={{width: "300px"}}> <CardWrapper {...args} /> </div>
  )  
}

export const CardWithImage = Template.bind({});
CardWithImage.args = {
  title: "Teaser!",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  image:  "https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
};