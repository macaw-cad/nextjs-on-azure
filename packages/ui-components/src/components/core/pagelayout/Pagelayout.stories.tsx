import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Card } from '../card/Card';

export default {
  title: 'Core/Base/Layout',
  component: 'Layout',
  decorators: [
    (Story: () => React.ReactFragment) => (
      <div className="sb-fullwidth">
        {Story()}
      </div>
    ),
  ],
} as unknown as Meta;

const Template: Story = (args) => {
  return (
    <div className={`page ${args.showColumns ? 'sb-show-columns' : ''}`}>

      <header style={{ backgroundColor: '#000', color: '#fff' }}>
        <div className="container">
          Header
        </div>
      </header>

      <main>

        {args.show1column && (
          <div className={`row ${args.showRowAccent ? 'row--accent' : ''}`}>
            <div className="column">
              <Card title={<h4>row1</h4>} />
            </div>
          </div>
        )}

        {args.show2column && (
          <div className="row row--2c">
            <div className="column">
              <Card title={<h4>row2a</h4>} />
            </div>
            <div className="column">
              <Card title={<h4>row2b</h4>} />
            </div>
          </div>
        )}

        {args.show3column && (
          <>
            <div className="row row--3c">
              <div className="column">
                <Card title={<h4>row3a</h4>} />
              </div>
              <div className="column">
                <Card title={<h4>row3b</h4>} classname="sb-card-s" />
                <Card title={<h4>row3b</h4>} classname="sb-card-s" />
              </div>
              <div className="column">
                <Card title={<h4>row3c</h4>} />
              </div>
            </div>

            <div className={`row row--3c ${args.showRowAccent ? 'row--accent' : ''}`}>
              <div className="column">
                <Card title={<h4>row3a</h4>} />
              </div>
              <div className="column">
                <Card title={<h4>row3b</h4>} />
              </div>
              <div className="column">
                <Card title={<h4>row3c</h4>} />
              </div>
            </div>
          </>
        )}

        {args.show4column && (
          <div className="row row--4c">
            <div className="column">
              <Card title={<h4>row4a</h4>} />
            </div>
            <div className="column">
              <Card title={<h4>row4b</h4>} />
            </div>
            <div className="column">
              <Card title={<h4>row4c</h4>} />
            </div>
            <div className="column">
              <Card title={<h4>row4d</h4>} />
            </div>
          </div>
        )}

        {args.showSidebarL && (
          <div className="row row--sidebar-l">
            <div className="column">
              <Card title={<h4>sidebar-l a</h4>} />
            </div>
            <div className="column">
              <Card title={<h4>sidebar-l b</h4>} />
            </div>
          </div>
        )}

        {args.showSidebarR && (
          <div className="row row--sidebar-r">
            <div className="column">
              <Card title={<h4>sidebar-r a</h4>} classname="sb-card-s" />
              <div className="row row--2c">
                <div className="column">
                  <Card title={<h4>row2a</h4>} classname="sb-card-s" />
                </div>
                <div className="column">
                  <Card title={<h4>row2b</h4>} classname="sb-card-s" />
                </div>
              </div>
            </div>
            <aside className="column">
              <Card title={<h4>sidebar-r b</h4>} />
            </aside>
          </div>
        )}

      </main>

      <footer style={{ backgroundColor: '#000', color: '#fff' }}>
        <div className="container">
          Footer
        </div>
      </footer>

    </div>
  )
}

export const Layout = Template.bind({});
Layout.args = {
  showColumns: false,
  showRowAccent: false,
  show1column: true,
  show2column: true,
  show3column: true,
  show4column: true,
  showSidebarL: false,
  showSidebarR: false
};
