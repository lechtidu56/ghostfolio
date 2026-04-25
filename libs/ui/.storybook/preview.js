import { withThemeByClassName } from '@storybook/addon-themes';

const preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'theme-light',
        dark: 'theme-dark'
      },
      defaultTheme: 'light',
      parentSelector: 'body'
    })
  ]
};

if (typeof document !== 'undefined') {
  document.body.classList.add('mat-typography');
}

export default preview;
