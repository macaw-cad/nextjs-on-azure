import React from 'react';
import { Story, Meta } from "@storybook/react";

export default {
  title: 'Core/Base/Spacing',
  component: 'Spacing',
  argTypes: {
    fontsize: {
      name: 'Base font size',
      options: [10,11,12,13,14,15,16,17,18,19,20],
      control: { type: 'select' }
    }
  }
} as unknown as Meta;

const Template: Story = (args) => {
  const spaces = [
    {
      name: '.5',
      value: .125
    },
    {
      name: '1',
      value: .25
    },
    {
      name: '1.5',
      value: .375
    },
    {
      name: '2',
      value: .5
    },
    {
      name: '2.5',
      value: .625
    },
    {
      name: '3',
      value: .75
    },
    {
      name: '3.5',
      value: .875
    },
    {
      name: '4',
      value: 1
    },
    {
      name: '5',
      value: 1.25
    },
    {
      name: '6',
      value: 1.5
    },
    {
      name: '7',
      value: 1.75
    },
    {
      name: '8',
      value: 2
    },
    {
      name: '9',
      value: 2.25
    },
    {
      name: '10',
      value: 2.5
    },
    {
      name: '11',
      value: 2.75
    },
    {
      name: '12',
      value: 3
    },
    {
      name: '14',
      value: 3.5
    },
    {
      name: '16',
      value: 4
    },
    {
      name: '20',
      value: 5
    },
    {
      name: '24',
      value: 6
    },
    {
      name: '28',
      value: 7
    },
    {
      name: '32',
      value: 8
    },
    {
      name: '36',
      value: 9
    },
    {
      name: '40',
      value: 10
    },
    {
      name: '44',
      value: 11
    },
    {
      name: '48',
      value: 12
    },
    {
      name: '52',
      value: 13
    },
    {
      name: '56',
      value: 14
    },
    {
      name: '60',
      value: 15
    },
    {
      name: '64',
      value: 16
    },
    {
      name: '72',
      value: 18
    },
    {
      name: '80',
      value: 20
    },
    {
      name: '96',
      value: 24
    },
  ];

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
        <p>
        The values are proportional, so 16 is twice as much spacing as 8.
        One spacing unit is equal to 0.25rem, which translates to 4px by default in common browsers
        and the value '4' is equal to the base font size.
        </p>
        <p>
        You can also apply these using <a href="/?path=/story/core-utilities-spacing-classes--spacing-classes">utility spacing classes</a>.
        </p>
      </section>

      <table className="sb-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Size</th>
            <th>Pixels</th>
            <th className="hidden sm:table-cell">
              <span className="sr-only">Preview</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>0px</td>
            <td>0px</td>
            <td className="hidden sm:table-cell">
              <div className="sb-bar" style={{width: "0px"}}>
              </div>
            </td>
          </tr>
          <tr>
            <td>px</td>
            <td>1px</td>
            <td>1px</td>
            <td className="hidden sm:table-cell">
              <div className="sb-bar" style={{width: "1px"}}>
              </div>
            </td>
          </tr>
          {spaces.map((space, key) => {
            const highlight = space.name === '4' ? 'sb-highlight' : '';
            return (
              <tr className={highlight} key={key}>
                <td>{space.name}</td>
                <td>{space.value}rem</td>
                <td>{(space.value * args.fontsize)}px</td>
                <td className="hidden sm:table-cell">
                  <div className="sb-bar" style={{width: (space.value * args.fontsize) + "px"}}>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export const Spacing = Template.bind({});
Spacing.args = {
  fontsize: 16,
};
