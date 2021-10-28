import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type ThreeColumnsProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const ThreeColumns = (props: ThreeColumnsProps): JSX.Element => (
  <div className="row mb-4 row--3c">
    <Placeholder
      rendering={props.rendering}
      name="col1"
      renderEach={(component, index) => (
        <div className="column" key={index}>
          {component}
        </div>
      )}
      renderEmpty={(components) => <div className="column">{components}</div>}
    />

    <Placeholder
      rendering={props.rendering}
      name="col2"
      renderEach={(component, index) => (
        <div className="column" key={index}>
          {component}
        </div>
      )}
      renderEmpty={(components) => <div className="column">{components}</div>}
    />
    <Placeholder
      rendering={props.rendering}
      name="col3"
      renderEach={(component, index) => (
        <div className="column" key={index}>
          {component}
        </div>
      )}
      renderEmpty={(components) => <div className="column">{components}</div>}
    />
  </div>
);

export default ThreeColumns;
