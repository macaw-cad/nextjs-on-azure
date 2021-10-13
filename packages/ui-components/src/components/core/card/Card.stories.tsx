import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from './Card';

export default {
  title: 'Core/Components/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <div style={{width: "300px"}}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Card>;

const CardWrapper: React.FC<{title: string, image: string, description: string, classname: string}> = ({title, image, description, classname}) => (
  <Card 
    title={<>{title}</>}
    classname={classname}
    description={<>{description}</>}
    image={<img src={image} />}
  />
)

const Template: ComponentStory<typeof CardWrapper> = (args) => {
  return <CardWrapper {...args} />  
}

export const Default = Template.bind({});
Default.args = {
  title: "Teaser!",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  image:  "https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
};

export const BackgroundImage = Template.bind({});
BackgroundImage.args = {
  classname: "card--img-bg",
  title: "Teaser!",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  image:  "https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
};

export const SquareImage = Template.bind({});
SquareImage.args = {
  classname: "card--img-1-1",
  title: "Teaser!",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  image:  "https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
};

export const HDRatio = Template.bind({});
HDRatio.args = {
  classname: "card--img-16-9",
  title: "Teaser!",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  image:  "https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
};