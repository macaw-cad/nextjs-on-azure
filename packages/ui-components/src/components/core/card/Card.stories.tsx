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

const CardWrapper: React.FC<{title: string, image: string, description: string, callToAction: { text: string, url: string}, classname: string}> = ({title, image, description, callToAction, classname}) => (
  <Card 
    title={<>{title}</>}
    classname={classname}
    description={<>{description}</>}
    image={<img src={image} alt='' />}
    callToAction={callToAction}
  />
)

const Template: ComponentStory<typeof CardWrapper> = (args) => {
  return <CardWrapper {...args} />
}

export const Default = Template.bind({});
Default.args = {
  title: "Teaser!",
  description: "Lorem consectetur adipiscing elit",
  callToAction: {
    url: "/",
    text: "I want some"
  },
  image:  "https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
};

export const BackgroundImage = Template.bind({});
BackgroundImage.args = {
  classname: "card--bg-image",
  title: "Teaser!",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  image:  "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&h=500&q=80",
};

export const SquareImage = Template.bind({});
SquareImage.args = {
  classname: "card--square-image",
  title: "Teaser!",
  image:  "https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
};

export const HDRatio = Template.bind({});
HDRatio.args = {
  classname: "card--hd-image",
  title: "Teaser!",
  description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  image:  "https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
};