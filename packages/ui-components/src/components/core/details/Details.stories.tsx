import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Details } from './Details';

export default {
  title: 'Core/Components',
  component: Details,
} as ComponentMeta<typeof Details>;

const Template: ComponentStory<typeof Details> = (args) => {
  return (
    <Details {...args} />
  )
}

export const DetailsStory = Template.bind({});
DetailsStory.storyName = 'Details';
DetailsStory.args = {
  summary: <h3 className="h5">A frequently asked question</h3>,
  description: <>
    <p>
      A very fine answer. Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Nemo in laudantium laboriosam assumenda, sunt eaque.
      Numquam omnis itaque iste perspiciatis veniam tempora fugit consequuntur
      corporis nam, dignissimos, voluptatibus culpa illo.
    </p>
    <p>
      Numquam omnis itaque iste perspiciatis veniam tempora fugit consequuntur
      corporis nam, dignissimos, voluptatibus culpa illo. Nemo in laudantium laboriosam assumenda, sunt eaque.
    </p>
  </>,
  open: false
};
