import React from 'react';
import { Story, Meta } from "@storybook/react";

export default {
  title: 'Core/Utilities',
  component: 'SpaceClassnames',
  argTypes: {
    fontsize: {
      name: 'Base font size',
      options: [10,11,12,13,14,15,16,17,18,19,20],
      control: { type: 'select' }
    }
  }
} as unknown as Meta;

const Template: Story = (args) => {
  return (
    <>
      <section className="sb-width" style={{marginBottom: '36px'}}>
        <p>
          Spacing is absolute and derived from the default font-size. It is set in rem units and can be used
          by using the SASS function 'space' with the right name, without quotes:
        </p>
        <pre>
        <code>
          .myclass &#123; padding: <span className="sb-attn">space(.5) space(4)</span>; &#125;
        </code>
        </pre>
      </section>
      <div className="sb-bar ph-16" style={{width: "0"}}/>
    </>
  )
}

export const SpaceClassnames = Template.bind({});

SpaceClassnames.args = {
  fontsize: 16,
};
