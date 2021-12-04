export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      small: {
        name: 'Mobile',
        styles: {
          width: '600px',
          height: '963px',
        },
      },
      middle: {
        name: 'Tablet',
        styles: {
          width: '768px',
          height: '963px',
        },
      },
      large: {
        name: 'Desktop',
        styles: {
          width: '1440px',
          height: '1200px',
        },
      },
    }
  },
}