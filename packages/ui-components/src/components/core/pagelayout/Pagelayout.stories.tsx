import React, { CSSProperties } from 'react';
import { Story, Meta } from '@storybook/react';
import { Card } from '../card/Card';
import { HeaderStory } from '../header/Header.stories';

type CSSWithCustomProps = CSSProperties & Record<`--${string}`, number | string>;

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
    <div
      className={`page sb-page ${args.showColumns ? 'sb-show-columns' : ''}`}
      style={{ '--grid-gap': args.gap } as CSSWithCustomProps}
    >

      <HeaderStory {...args.headerProps}/>

      <main>

        {(args.show1column || args.showRowAccent) && (
          <div className={`row ${args.showRowAccent ? 'row--accent' : ''}`}>
            <div className="column">
              <Card title={<h5>.row{args.showRowAccent ? '.row--accent' : ''}</h5>} />
            </div>
          </div>
        )}

        {args.show2column && (
          <div className="row row--2c">
            <div className="column">
              <Card title={<h5>.row--2c a</h5>} />
            </div>
            <div className="column">
              <Card title={<h5>.row--2c b</h5>} className="sb-card-s" />
              <Card title={<h5>.row--2c b</h5>} className="sb-card-s" />
            </div>
          </div>
        )}

        {(args.show3column || args.showRowAccent) && (
          <div
            className={`row row--3c ${args.showRowAccent ? 'row--accent' : ''}`}
            style={{ '--row-bg-color': args.set2ndRowBgcolor } as CSSWithCustomProps}
          >
            <div className="column">
              <Card title={<h5>.row--3c{args.showRowAccent ? '.row--accent' : ''} a</h5>} />
            </div>
            <div className="column">
              <Card title={<h5>.row--3c{args.showRowAccent ? '.row--accent' : ''} b</h5>} className="sb-card-s" />
              <Card title={<h5>.row--3c{args.showRowAccent ? '.row--accent' : ''} b</h5>} className="sb-card-s" />
            </div>
            <div className="column">
              <Card title={<h5>.row--3c{args.showRowAccent ? '.row--accent' : ''} c</h5>} />
            </div>
          </div>
        )}

        {args.show4column && (
          <div className="row row--4c">
            <div className="column">
              <Card title={<h5>.row--4c a</h5>} />
            </div>
            <div className="column">
              <Card title={<h5>.row--4c b</h5>} />
            </div>
            <div className="column">
              <Card title={<h5>.row--4c c</h5>} className="sb-card-s" />
              <Card title={<h5>.row--4c c</h5>} className="sb-card-s" />
            </div>
            <div className="column">
              <Card title={<h5>.row--4c d</h5>} />
            </div>
          </div>
        )}

        {args.showSidebarL && (
          <div
            className="row row--sidebar-l"
          >
            <div className="column">
              <Card title={<h5>.row--sidebar-l a</h5>} />
            </div>
            <div className="column">
              <div
                className="row row--4c"
                style={{ '--grid-gap': args.sidebarLNestedRowGap } as CSSWithCustomProps}
              >
                <Card title={<h5>nested .row--4c a</h5>} className="column sb-card-s" />
                <Card title={<h5>nested .row--4c b</h5>} className="column sb-card-s" />
                <Card title={<h5>nested .row--4c c</h5>} className="column sb-card-s" />
                <Card title={<h5>nested .row--4c d</h5>} className="column sb-card-s" />
                <Card title={<h5>nested .row--4c e</h5>} className="column sb-card-s" />
                <Card title={<h5>nested .row--4c f</h5>} className="column sb-card-s" />
                <Card title={<h5>nested .row--4c g</h5>} className="column sb-card-s" />
              </div>
            </div>
          </div>
        )}

        {args.showSidebarR && (
          <div className="row row--sidebar-r">
            <div className="column">
              <Card title={<h5>.row--sidebar-r a</h5>} />
            </div>
            <aside className="column">
              <Card title={<h5>.row--sidebar-r b</h5>} />
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
  gap: '16px',
  showColumns: false,
  showRowAccent: false,
  set2ndRowBgcolor: '#f6f6f6',
  show1column: true,
  show2column: true,
  show3column: true,
  show4column: true,
  showSidebarL: false,
  sidebarLNestedRowGap: '8px',
  showSidebarR: false,
  headerProps: HeaderStory.args,
};
