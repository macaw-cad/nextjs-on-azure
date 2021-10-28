/**
 * Describes a file that represents a component definition
 */
export interface ComponentFile {
  path: string;
  moduleName: string;
  componentName: string;
}

/**
 * Generates the contents of the component factory file using a predefined string template.
 * @param components - the list of component files to include
 * @returns component factory file contents
 */
function generateComponentFactory(components: ComponentFile[]): string {
  return `/* eslint-disable */
// Do not edit this file, it is auto-generated at build time!
// See scripts/generate-component-factory.ts to modify the generation of this file.
${components
  .map((component) => `import * as ${component.moduleName} from '${component.path}';`)
  .join("\n")}

const components = new Map();
${components
  .map((component) => `components.set('${component.componentName}', ${component.moduleName});`)
  .join("\n")}

export function componentModule(componentName: string) {
  return components.get(componentName);
};

export function componentFactory(componentName: string) {
  return components.get(componentName)?.default;
};
`;
}

export default generateComponentFactory;
