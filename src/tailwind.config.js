module.exports = {
  darkMode: 'class',
  purge: [
    './common/**/*.ts',
    './components/**/*.tsx',
    './pages/**/*.tsx'
  ],
  theme: {
    fontFamily: {
      sans: [
        'Rubik',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace']
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.900'),
            a: {
              color: theme('colors.blue.700'),
              '&:hover': {
                color: theme('colors.blue.700'),
              },
            },
            blockquote: {
              borderLeftColor: theme('colors.indigo.800'),
              color: theme('colors.gray.500'),
            },
          }
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.indigo.400'),
              '&:hover': {
                color: theme('colors.indigo.500')
              },
            },
            h1: {color: theme('colors.gray.300')},
            h2: {color: theme('colors.gray.300')},
            h3: {color: theme('colors.gray.300')},
            h4: {color: theme('colors.gray.300')},
            h5: {color: theme('colors.gray.300')},
            h6: {color: theme('colors.gray.300')},
            strong: {color: theme('colors.gray.300')},
            code: {color: theme('colors.gray.300')},
            blockquote: {
              borderLeftColor: theme('colors.indigo.800'),
              color: theme('colors.gray.500')
            },
            figcaption: {
              color: theme('colors.gray.500')
            },
          }
        }
      }),
    },
  },
  variants: {
    extend: {
      typography: ['dark']
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
