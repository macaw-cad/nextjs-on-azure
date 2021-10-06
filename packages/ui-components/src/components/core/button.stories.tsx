import React from 'react';
import { Story, Meta } from "@storybook/react";


export default {
  title: 'Core/Base/Button',
  component: 'Button'
} as unknown as Meta;

const Template: Story = () => {
  return (
    <div style={{maxWidth: "40rem"}}>
      <button className="btn">button</button>
      <button className="btn btn--primary">primary</button>
    </div>
  )  
}

export const Button = Template.bind({});