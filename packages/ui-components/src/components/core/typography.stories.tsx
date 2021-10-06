import React from 'react';
import { Story, Meta } from "@storybook/react";


export default {
  title: 'Core/Base/Typography',
  component: 'Typography'
} as unknown as Meta;

const Template: Story = () => {
  return (
    <div style={{maxWidth: "40rem"}}>
      <h1>Header h1</h1>
      <h2>Header h2</h2>
      <h3>Header h3</h3>
      <h4>Header h4</h4>
      <h5>Header h5</h5>
      <h6>Header h6</h6>
      <p>
        Lorem ipsum dolor sit amet <strong>consectetur</strong> adipisicing
        elit. Atque praesentium vitae neque ullam aliquid laboriosam eaque cum.
        quidem laboriosam cum voluptatum porro eligendi cumque ratione eum
        provident? Ad! Optio molestiae dolores sunt soluta. Excepturi minima
        dolore, quia ad culpa magni. Esse animi facere distinctio soluta dolores
        perferendis architecto explicabo nobis!
      </p>
      <p>
        Facilis rerum <a href="#">sequi delectus autem itaque</a> in expedita
        debitis dignissimos, mollitia odit quae. Ullam repudiandae, consequatur
        officiis doloremque maxime totam atque rem? Placeat sequi quam,
        dignissimos veniam earum, nihil ducimus illo mollitia velit sunt
        incidunt nam? Esse ipsum voluptates omnis nihil ratione illum aliquam!
      </p>
    </div>
  )  
}

export const Typography = Template.bind({});