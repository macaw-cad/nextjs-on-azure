import "../src/scss/core/core.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Core', ['Introduction', 'Abstract', 'Base', 'Atoms', 'Elements', 'Molecules', 'Components', 'Organisms', 'Composites', 'Pages'], 'Example'], 
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
