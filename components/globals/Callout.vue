<script setup lang="ts">
const props = defineProps({
  /**
   * @values info, success, warning, danger
   */
  type: {
    type: String,
    default: 'info',
    validator(value: string) {
      return ['info', 'success', 'warning', 'danger', 'primary'].includes(
        value
      );
    },
  },
  modelValue: {
    required: false,
    default: () => ref(false),
  },
});

const emit = defineEmits(['update:modelValue']);

const isOpen = ref(props.modelValue);

const toggle = () => {
  isOpen.value = !isOpen.value;
  emit('update:modelValue', isOpen.value);
};
</script>

<template>
  <div class="callout" :class="[type]">
    <span class="preview" @click="toggle">
      <span class="summary">
        <ContentSlot :use="$slots.summary" />
      </span>
      <Icon
        name="heroicons-outline:chevron-right"
        class="icon"
        :class="[isOpen && 'rotate']"
      />
    </span>

    <div v-show="isOpen" class="content">
      <ContentSlot :use="$slots.content" />
    </div>
  </div>
</template>

<style scoped lang="ts">
css({
  '.callout': {
    position: 'relative',
    px: '{huyooo.space.4}',
    py: '{huyooo.space.3}',
    my: '{huyooo.space.8}',
    fontSize: '{huyooo.text.sm.fontSize}',
    lineHeight: '{huyooo.text.sm.lineHeight}',
    borderRadius: '{huyooo.radii.md}',
    border: '1px solid',

    '&.primary': {
      stateColors: 'primary'
    },
    '&.info': {
      stateColors: 'info'
    },
    '&.success': {
      stateColors: 'success'
    },
    '&.warning': {
      stateColors: 'warning'
    },
    '&.danger': {
      stateColors: 'danger'
    },
    '.preview': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      cursor: 'pointer',
      '.summary': {
        ':deep(p)': {
          margin: 0,
          '& + p': {
            marginTop: '{huyooo.space.2}'
          }
        }
      },
      '.icon': {
        width: '{huyooo.space.5}',
        height: '{huyooo.space.5}',
        transition: 'transform 100ms',
        '&.rotate': {
          transform: 'rotate(90deg)'
        }
      }
    },
    '.content': {
      paddingTop: '{huyooo.space.3}',
      ':deep(p)': {
        margin: 0,
        '& + p': {
          marginTop: '{huyooo.space.2}'
        }
      }
    }
  }
})
</style>
