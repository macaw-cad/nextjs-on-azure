import React from 'react';
import { Story, Meta } from "@storybook/react";

export default {
  title: 'Core/Utilities/Spacing classes',
  component: 'SpacingClasses',
} as unknown as Meta;

const Template: Story = (args) => {
  return (
    <>
      <p className="mb-6">
        Space utility classes use the same system and naming convention as <a href="/?path=/story/core-base-spacing--spacing">the spacing function for css</a>.<br />
        They can be used for both padding and margins.
      </p>
      <table>
        <thead>
          <tr>
            <th>class name</th>
            <th>css / sass</th>
            <th>notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>
                pt-20
              </code>
            </td>
            <td>
              <code>
                padding-top: 5rem;
              </code>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <code>
                m-0-5
              </code>
            </td>
            <td>
              <code>
                margin: 0.125rem;
              </code>
            </td>
            <td>
              <a href="/?path=/story/core-base-spacing--spacing">Spacing unit names</a> with a dot are converted to a dash, so <code>.5</code> becomes <code>0-5</code> etc.
            </td>
          </tr>
          <tr>
            <td>
              <code>
                pv-7
              </code>
            </td>
            <td>
              <code>
                padding-top: 1.75rem;<br />
                padding-bottom: 1.75rem;
              </code>
            </td>
            <td>
              <code>h</code> = left and right<br />
              <code>v</code> = top and bottom
            </td>
          </tr>
          <tr>
            <td>
              <code>
                mh-auto
              </code>
            </td>
            <td>
              <code>
                margin-left: auto;<br />
                margin-right: auto;
              </code>
            </td>
            <td>Margins can additionally also be set to <code>auto</code></td>
          </tr>
          <tr>
            <td>
              <code>
                pr-xs-12
              </code>
            </td>
            <td>
              <code>
                @include mq(xs) &#123;<br />
                &nbsp;&nbsp;padding-right: 3rem;<br />
                &#125;
              </code>
            </td>
            <td>
              Classes are also generated for the same breakpoints as defined in the media-query mixin<br />
              You can configure these to not be generated
            </td>
          </tr>
          <tr>
            <td>
              <code>
                pb-10
              </code>
            </td>
            <td>
              <code>
                padding-bottom: 2.5rem !important;
              </code>
            </td>
            <td>
              You can configure all classes to use the <code>!important</code> rule.<br />
              By default this feature is switched off
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        You can configure if and how the spacing classes are generated using this SASS map (shown with default settings):<br />
      </p>
      <pre>
        <code>
          $spacing-classes: (<br />
          &nbsp;&nbsp;generate: true,<br />
          &nbsp;&nbsp;responsive: true,<br />
          &nbsp;&nbsp;important: false<br />
          );
        </code>
      </pre>
    </>
  )
}

export const SpacingClasses = Template.bind({});
SpacingClasses.storyName = 'Spacing classes';
