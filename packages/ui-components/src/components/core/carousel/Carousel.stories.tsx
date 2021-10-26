import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Carousel } from './Carousel';
import { Image } from '../image/Image';

export default {
  title: 'Core/Components',
  component: Carousel,
  argTypes: {
    noloop: { description: "When set to false (default), pressing 'next' on the last slide will animate to the first slide" },
    setSlide: { description: "Sets which slide to show on load" },
  },
  decorators: [
    (Story) => (
      <div className="sb-width">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => {
  return (
    <Carousel {...args}>
      <Image src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&h=500&q=80" />
      <Image src="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&h=500&q=80" />
      <Image src="https://images.unsplash.com/photo-1594031245755-1ac99bbc7a3c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&h=500&q=80" />
    </Carousel>
  )  
}

export const CarouselStory = Template.bind({});
CarouselStory.storyName = 'Carousel';
CarouselStory.args = {
  noloop: false,
  setSlide: 1
};