import { defineTheme } from 'pinceau';
import theme from '@huyooo-hub/tokens/config';

export default defineTheme({
  huyooo: {
    color: {
      primary: theme.huyooo.color.teal,
    },

    space: {
      // TODO: move to tokens
      128: '32rem',
    },
  },

  elements: {
    $schema: {
      title: 'All the configurable tokens for your Elements.',
      tags: ['@studioIcon uiw:component'],
    },
    text: {
      primary: {
        color: {
          static: {
            initial: '{huyooo.color.gray.900}',
            dark: '{huyooo.color.gray.50}',
          },
          // TODO: add `hover` state
          hover: {},
        },
      },
      secondary: {
        color: {
          static: {
            initial: '{huyooo.color.gray.500}',
            dark: '{huyooo.color.gray.400}',
          },
          hover: {
            initial: '{huyooo.color.gray.700}',
            dark: '{huyooo.color.gray.200}',
          },
        },
      },
    },

    container: {
      $schema: {
        title: 'Main container sizings.',
        tags: [
          '@studioInput design-token',
          '@studioInputTokenType size',
          '@studioIcon material-symbols:width-full-outline',
        ],
      },
      maxWidth: '80rem',
      padding: {
        mobile: '{huyooo.space.4}',
        xs: '{huyooo.space.4}',
        sm: '{huyooo.space.6}',
        md: '{huyooo.space.6}',
      },
    },

    backdrop: {
      $schema: {
        title: 'Backdrops used in Elements.',
        tags: [
          '@studioInput design-token',
          '@studioInputTokenType size',
          '@studioIcon material-symbols:blur-circular',
        ],
      },
      // TODO: add filter tokens in `tokens` package
      filter: 'saturate(200%) blur(20px)',
      background: {
        // TODO: rgba 80% from huyooo.color.white
        initial: '#fffc',
        // TODO: rgba 80% from huyooo.color.black
        dark: '#0c0d0ccc',
      },
    },

    border: {
      $schema: {
        title: 'Borders used in Elements.',
        tags: [
          '@studioInput design-token',
          '@studioInputTokenType color',
          '@studioIcon material-symbols:border-all-outline-rounded',
        ],
      },
      primary: {
        static: {
          initial: '{huyooo.color.gray.100}',
          dark: '{huyooo.color.gray.900}',
        },
        hover: {
          initial: '{huyooo.color.gray.200}',
          dark: '{huyooo.color.gray.800}',
        },
      },
      secondary: {
        static: {
          initial: '{huyooo.color.gray.200}',
          dark: '{huyooo.color.gray.800}',
        },
        hover: {
          initial: '',
          dark: '',
        },
      },
    },

    surface: {
      $schema: {
        title: 'Surfaces used in Elements.',
        tags: [
          '@studioInput design-token',
          '@studioInputTokenType color',
          '@studioIcon fluent:surface-hub-20-filled',
        ],
      },
      background: {
        base: {
          initial: '{huyooo.color.gray.100}',
          dark: '{huyooo.color.gray.900}',
        },
      },
    },

    state: {
      $schema: {
        title: 'Color states used in Elements.',
        tags: [
          '@studioInput design-token',
          '@studioInputTokenType color',
          '@studioIcon mdi:palette-advanced',
        ],
      },
      primary: {
        color: {
          primary: {
            initial: '{huyooo.color.primary.600}',
            dark: '{huyooo.color.primary.400}',
          },
          secondary: {
            initial: '{huyooo.color.primary.700}',
            dark: '{huyooo.color.primary.200}',
          },
        },
        backgroundColor: {
          primary: {
            initial: '{huyooo.color.primary.50}',
            dark: '{huyooo.color.primary.900}',
          },
          secondary: {
            initial: '{huyooo.color.primary.100}',
            dark: '{huyooo.color.primary.800}',
          },
        },
        borderColor: {
          primary: {
            initial: '{huyooo.color.primary.100}',
            dark: '{huyooo.color.primary.800}',
          },
          secondary: {
            initial: '{huyooo.color.primary.200}',
            dark: '{huyooo.color.primary.700}',
          },
        },
      },
      info: {
        color: {
          primary: {
            initial: '{huyooo.color.blue.500}',
            dark: '{huyooo.color.blue.400}',
          },
          secondary: {
            initial: '{huyooo.color.blue.600}',
            dark: '{huyooo.color.blue.200}',
          },
        },
        backgroundColor: {
          primary: {
            initial: '{huyooo.color.blue.50}',
            dark: '{huyooo.color.blue.900}',
          },
          secondary: {
            initial: '{huyooo.color.blue.100}',
            dark: '{huyooo.color.blue.800}',
          },
        },
        borderColor: {
          primary: {
            initial: '{huyooo.color.blue.100}',
            dark: '{huyooo.color.blue.800}',
          },
          secondary: {
            initial: '{huyooo.color.blue.200}',
            dark: '{huyooo.color.blue.700}',
          },
        },
      },
      success: {
        color: {
          primary: {
            initial: '{huyooo.color.green.500}',
            dark: '{huyooo.color.green.400}',
          },
          secondary: {
            initial: '{huyooo.color.green.600}',
            dark: '{huyooo.color.green.200}',
          },
        },
        backgroundColor: {
          primary: {
            initial: '{huyooo.color.green.50}',
            dark: '{huyooo.color.green.900}',
          },
          secondary: {
            initial: '{huyooo.color.green.100}',
            dark: '{huyooo.color.green.800}',
          },
        },
        borderColor: {
          primary: {
            initial: '{huyooo.color.green.100}',
            dark: '{huyooo.color.green.800}',
          },
          secondary: {
            initial: '{huyooo.color.green.200}',
            dark: '{huyooo.color.green.700}',
          },
        },
      },
      warning: {
        color: {
          primary: {
            initial: '{huyooo.color.yellow.600}',
            dark: '{huyooo.color.yellow.400}',
          },
          secondary: {
            initial: '{huyooo.color.yellow.700}',
            dark: '{huyooo.color.yellow.200}',
          },
        },
        backgroundColor: {
          primary: {
            initial: '{huyooo.color.yellow.50}',
            dark: '{huyooo.color.yellow.900}',
          },
          secondary: {
            initial: '{huyooo.color.yellow.100}',
            dark: '{huyooo.color.yellow.800}',
          },
        },
        borderColor: {
          primary: {
            initial: '{huyooo.color.yellow.100}',
            dark: '{huyooo.color.yellow.800}',
          },
          secondary: {
            initial: '{huyooo.color.yellow.200}',
            dark: '{huyooo.color.yellow.700}',
          },
        },
      },
      danger: {
        color: {
          primary: {
            initial: '{huyooo.color.red.500}',
            dark: '{huyooo.color.red.300}',
          },
          secondary: {
            initial: '{huyooo.color.red.600}',
            dark: '{huyooo.color.red.200}',
          },
        },
        backgroundColor: {
          primary: {
            initial: '{huyooo.color.red.50}',
            dark: '{huyooo.color.red.900}',
          },
          secondary: {
            initial: '{huyooo.color.red.100}',
            dark: '{huyooo.color.red.800}',
          },
        },
        borderColor: {
          primary: {
            initial: '{huyooo.color.red.100}',
            dark: '{huyooo.color.red.800}',
          },
          secondary: {
            initial: '{huyooo.color.red.200}',
            dark: '{huyooo.color.red.700}',
          },
        },
      },
    },
  },

  utils: {
    stateColors: (value: any) => {
      return {
        color: `{elements.state.${value}.color.primary} !important`,
        backgroundColor: `{elements.state.${value}.backgroundColor.primary} !important`,
        borderColor: `{elements.state.${value}.borderColor.primary} !important`,
        ':deep(p code)': {
          color: `{elements.state.${value}.color.secondary} !important`,
          backgroundColor: `{elements.state.${value}.backgroundColor.secondary} !important`,
        },
        ':deep(code)': {
          color: `{elements.state.${value}.color.primary} !important`,
          backgroundColor: `{elements.state.${value}.backgroundColor.secondary} !important`,
        },
        ':deep(a code)': {
          borderColor: `{elements.state.${value}.borderColor.primary} !important`,
        },
        ':deep(a)': {
          borderColor: 'currentColor',
          code: {
            backgroundColor: `{elements.state.${value}.backgroundColor.primary} !important`,
          },
          '&:hover': {
            color: `{elements.state.${value}.color.secondary} !important`,
            borderColor: 'currentColor !important',
            code: {
              backgroundColor: `{elements.state.${value}.backgroundColor.secondary} !important`,
              color: `{elements.state.${value}.color.secondary} !important`,
              borderColor: `{elements.state.${value}.borderColor.secondary} !important`,
            },
          },
        },
      };
    },
  },
});
