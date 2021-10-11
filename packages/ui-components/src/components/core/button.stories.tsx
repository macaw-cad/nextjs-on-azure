import React from 'react';
import { Story, Meta } from "@storybook/react";


export default {
  title: 'Core/Base/Buttons',
  component: 'Buttons'
} as unknown as Meta;

const Template: Story = () => {
  return (
    <div className="sb-width">
      <button className="btn">.btn</button>
      <br/><br/>
      <button className="btn" disabled>.btn [disabled]</button>
      <br/><br/>
      <a href="#woop" className="btn btn--primary">.btn .btn--primary</a>
      <br/><br/>
      <button className="btn btn--large">.btn .btn--large</button>
    </div>
  )  
}

export const Buttons = Template.bind({});