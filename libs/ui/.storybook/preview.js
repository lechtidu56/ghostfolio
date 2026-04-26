import { withThemeByClassName } from '@storybook/addon-themes';

const preview = {
  decorators: [
    withThemeByClassName({
      defaultTheme: 'light',
      parentSelector: 'body',
      themes: {
        dark: 'theme-dark',
        light: 'theme-light'
      }
    })
  ]
};

if (typeof document !== 'undefined') {
  document.body.classList.add('mat-typography');
}

export default preview;
