import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

export const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#1a73e8',
          secondary: '#5f6368',
          success: '#34a853',
          warning: '#fbbc04',
          error: '#ea4335',
          info: '#4285f4',
        },
      },
    },
  },
});
