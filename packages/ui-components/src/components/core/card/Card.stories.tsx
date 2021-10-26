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

const CardWrapper: React.FC<{title: JSX.Element, image: string, description: JSX.Element, callToAction: { text: string, url: string}, className: string}> = ({title, image, description, callToAction, className}) => (
  <Card 
    title={<>{title}</>}
    className={className}
    description={<>{description}</>}
    image={image}
    callToAction={callToAction}
  />
)

const Template: ComponentStory<typeof CardWrapper> = (args) => {
  return <CardWrapper {...args} />
}

export const Default = Template.bind({});
Default.args = {
  title: <h4 className="h5">Teaser!</h4>,
  description: <>Lorem consectetur adipiscing elit</>,
  callToAction: {
    url: "/",
    text: "I want some"
  },
  image:  "https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
};

export const BackgroundImage = Template.bind({});
BackgroundImage.args = {
  className: "card--bg-image",
  title: <h4 className="h5">Teaser!</h4>,
  description: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit</>,
  image:  "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&h=500&q=80",
};

export const SquareImage = Template.bind({});
SquareImage.args = {
  className: "card--square-image",
  title: <h4 className="h5">Teaser!</h4>,
  image:  "https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
};

export const HDRatio = Template.bind({});
HDRatio.args = {
  className: "card--hd-image",
  title: <h4 className="h5">Teaser!</h4>,
  description: <>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</>,
  image:  "https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
};