import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Carousel } from './Carousel';

export default {
  title: 'Core/Components/Carousel',
  component: Carousel,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => {
  return (
    <div> <Carousel {...args} /> </div>
  )  
}

export const CarouselStory = Template.bind({});
CarouselStory.args = {
    carouselItems: [
        {
            image: { 
                src: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&h=500&q=80",
                alt: "1"
            }
        },
        {
            image: {
                src: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&h=500&q=80",
                alt: "2"
            }
        },
        {
            image: {
                src: "https://images.unsplash.com/photo-1594031245755-1ac99bbc7a3c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&h=500&q=80",
                alt: "3"
            }
        }
    ]
};