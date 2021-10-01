import { Text, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { StyleguideComponentProps } from 'lib/component-props';

type ThreeColumnsProps = StyleguideComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const ThreeColumns = (props: ThreeColumnsProps): JSX.Element => (
  <div className="row">
    <Placeholder
      rendering={props.rendering}
      name="col1"
      renderEach={(component, index) => (
        <div className="col-sm" key={index}>
          {component}
        </div>
      )}
      renderEmpty={(components) => <div className="col-sm">{components}</div>}
    />

    <Placeholder
      rendering={props.rendering}
      name="col2"
      renderEach={(component, index) => (
        <div className="col-sm" key={index}>
          {component}
        </div>
      )}
      renderEmpty={(components) => <div className="col-sm">{components}</div>}
    />
    <Placeholder
      rendering={props.rendering}
      name="col3"
      renderEach={(component, index) => (
        <div className="col-sm" key={index}>
          {component}
        </div>
      )}
      renderEmpty={(components) => <div className="col-sm">{components}</div>}
    />
  </div>
);

export default ThreeColumns;
