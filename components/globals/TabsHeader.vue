<script setup lang="ts">
import { nextTick, ref, watch } from 'vue';
import type { PropType } from 'vue';

const props = defineProps({
  tabs: {
    type: Array as PropType<{ label: string }[]>,
    required: true,
  },
  activeTabIndex: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(['update:activeTabIndex']);

const tabsRef = ref();

const highlightUnderline = ref();

const updateHighlightUnderlinePosition = (activeTab: any) => {
  if (!activeTab) {
    return;
  }

  highlightUnderline.value.style.insetInlineStart = `${activeTab.offsetLeft}px`;
  highlightUnderline.value.style.width = `${activeTab.clientWidth}px`;
};

const updateTabs = ($event: any, i: any) => {
  emit('update:activeTabIndex', i);
  nextTick(() => updateHighlightUnderlinePosition($event.target));
};

watch(
  tabsRef,
  (newVal) => {
    if (!newVal) {
      return;
    }

    setTimeout(() => {
      updateHighlightUnderlinePosition(
        tabsRef.value.children[props.activeTabIndex]
      );
    }, 50);
  },
  {
    immediate: true,
  }
);
</script>

<template>
  <div class="tabs-header">
    <div v-if="tabs" ref="tabsRef" class="tabs">
      <button
        v-for="({ label }, i) in tabs"
        :key="`${i}${label}`"
        :class="[activeTabIndex === i ? 'active' : 'not-active']"
        @click="updateTabs($event, i)"
      >
        {{ label }}
      </button>
      <span ref="highlightUnderline" class="highlight-underline">
        <span class="tab" />
      </span>
    </div>

    <slot name="footer" />
  </div>
</template>

<style scoped lang="ts">
css({
  ".tabs-header": {
    position: 'relative',
    background: '{huyooo.color.gray.200}',
    color: '{huyooo.color.red.700}',
    '@dark': {
      color: '{huyooo.color.red.500}',
      background: '{huyooo.color.gray.800}',
    },
    '.tabs': {
      position: 'relative',
      zIndex: 0,
      display: 'flex',
      px: '{huyooo.space.2}',
      overflowX: 'auto',
      button: {
        py: '{huyooo.space.rem.625}',
        px: '{huyooo.space.4}',
        position: 'relative',
        fontFamily: '{huyooo.font.mono}',
        fontSize: '{text.sm.fontSize}',
        lineHeight: '{text.sm.lineHeight}',
        letterSpacing: '{letterSpacing.tight}',
        userSelect: 'none',
        transition: 'color 100ms, background 100ms',
        '&.not-active': {
          color: '{huyooo.color.gray.700}',
          '&:hover': {
            color: '{huyooo.color.gray.800}',
            background: '{huyooo.color.gray.300}'
          },
          '@dark': {
            color: '{huyooo.color.gray.200}',
            '&:hover': {
              color: '{huyooo.color.gray.200}',
              background: '{huyooo.color.gray.700}'
            },
          }
        },
        '&.active': {
          color: '{huyooo.color.gray.500}',
          '@dark': {
            color: '{huyooo.color.gray.300}',
          }
        }
      },
      '.highlight-underline': {
        position: 'absolute',
        zIndex: -1,
        top: 0,
        height: '100%',
        transition: 'inset-inline-start 150ms, width 150ms',
        '.tab': {
          display: 'flex',
          width: '100%',
          height: '100%',
          backgroundColor: '{huyooo.color.gray.100}',
          '@dark': {
            backgroundColor: '{huyooo.color.gray.900}',
          }
        }
      }
    }
  }
})
</style>
