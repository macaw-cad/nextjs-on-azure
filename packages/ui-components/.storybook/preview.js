import "../src/scss/core/index-typography.scss";
import "../src/scss/core/storybook.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Core', ['Introduction', 'Abstract', 'Base', ['Reset', 'Layout', 'Font', 'Typography', 'Spacing', 'Button'], 'Atoms', 'Elements', 'Molecules', 'Components', 'Organisms', 'Composites', 'Pages', 'Utilities'], 'Example'], 
      locales: '', 
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
