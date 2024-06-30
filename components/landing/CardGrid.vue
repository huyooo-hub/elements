<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Features',
  },
});
</script>

<template>
  <section class="card-grid">
    <ContentSlot :use="$slots.root" />

    <h2 class="title">
      <ContentSlot :use="$slots.title" unwrap="p">
        {{ title }}
      </ContentSlot>
    </h2>
    <div class="layout">
      <slot />
    </div>
  </section>
</template>

<style scoped lang="ts">
css({
  '.card-grid': {
    position: 'relative',
    paddingBottom: '{huyooo.space.20}',
    '@sm': {
      paddingBottom: '{huyooo.space.24}',
    },
    '@lg': {
      paddingBottom: '{huyooo.space.32}',
    },
    '.title': {
      marginBottom: '{huyooo.space.8}',
      fontSize: '{text.3xl.fontSize}',
      lineHeight: '{text.3xl.lineHeight}',
      fontWeight: '{huyooo.fontWeight.bold}',
      letterSpacing: '{letterSpacing.tight}',
      color: '{elements.text.primary.color.static}',
      '@sm': {
        fontSize: '{text.4xl.fontSize}',
        lineHeight: '{text.4xl.lineHeight}',
      }
    },
    '.layout': {
      display: 'grid',
      gap: '{huyooo.space.4}',
      textAlign: 'start',
      '@sm': {
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
      },
      '@lg': {
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))'
      },
      '@2xl': {
        gap: '{huyooo.space.8}'
      }
    }
  }
})
</style>
