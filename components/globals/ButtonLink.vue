<script setup lang="ts">
import { PinceauTheme } from 'pinceau';
import { computedStyle } from 'pinceau/runtime';

defineProps({
  blank: {
    type: Boolean,
    required: false,
    default: false,
  },
  color: computedStyle<keyof PinceauTheme['color']>('primary'),
  href: {
    type: String,
    required: true,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  ...variants,
});
</script>

<template>
  <NuxtLink
    class="button-link"
    :to="href"
    :target="blank ? '_blank' : undefined"
  >
    <Icon v-if="icon" :name="icon" />
    <ContentSlot :use="$slots.default" unwrap="p ul li" />
  </NuxtLink>
</template>

<style lang="ts" scoped>
css({
  '.button-link': {
    '--button-primary': (props) => `{huyooo.color.${props.color}.600}`,
    '--button-secondary': (props) => `{huyooo.color.${props.color}.500}`,
    display: 'inline-flex',
    flex: 'none',
    alignItems: 'center',
    borderRadius: '{huyooo.radii.md}',
    transition: 'color 100ms ease-in-out',
    fontWeight: '{huyooo.fontWeight.bold}',
    color: '{huyooo.color.white}',
    backgroundColor: '{button.primary}',
    border: '1px solid transparent',
    '&:hover': {
      backgroundColor: '{button.secondary}'
    },
    '&:focus': {
      border: `1px solid {button.primary}`
    },
    '.icon': {
      marginInlineEnd: '{huyooo.space.1}'
    }
  },
  variants: {
    size: {
      small: {
        padding: `{huyooo.space.2} {huyooo.space.4}`,
        fontSize: '{huyooo.text.sm.fontSize}',
        lineHeight: '{huyooo.text.sm.lineHeight}',
      },
      medium: {
        padding: `{huyooo.space.rem.625} {huyooo.space.5}`,
        fontSize: '{huyooo.text.base.fontSize}',
        lineHeight: '{huyooo.text.base.lineHeight}',
      },
      large: {
        padding: `{huyooo.space.3} {huyooo.space.6}`,
        fontSize: '{huyooo.text.lg.fontSize}',
        lineHeight: '{huyooo.text.lg.lineHeight}',
      },
      giant: {
        padding: `{huyooo.space.4} {huyooo.space.8}`,
        fontSize: '{huyooo.text.lg.fontSize}',
        lineHeight: '{huyooo.text.lg.lineHeight}',
      },
      options: {
        default: 'medium'
      }
    },
    transparent: {
      true: {
        backgroundColor: `transparent`,
      }
    }
  }
})
</style>
