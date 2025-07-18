<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  showModalBuilder: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'success',
  },
  maxWidth: {
    type: String,
    default: '2xl',
  },
  minHeight: {
    type: String,
  },
  maxHeight: {
    type: String,
  },
  noBackgroundOpacity: {
    type: Boolean,
  },
})

const emit = defineEmits(['closeMainModalBuilder'])

const handleClose = () => {
  emit('closeMainModalBuilder')
}

const maxWidthClass = computed(() => {
  return {
    sm: 'lg:pbx-max-w-sm',
    md: 'lg:pbx-max-w-md',
    lg: 'lg:pbx-max-w-lg',
    xl: 'lg:pbx-max-w-xl',
    '2xl': 'lg:pbx-max-w-2xl',
    '3xl': 'lg:pbx-max-w-3xl',
    '4xl': 'lg:pbx-max-w-4xl',
    '5xl': 'lg:pbx-max-w-5xl',
    '6xl': 'lg:pbx-max-w-6xl',
    '7xl': 'lg:pbx-max-w-7xl',
    full: 'lg:pbx-max-w-full', // 100% width
    screen: 'lg:w-screen sm:pbx-max-w-none', // truly full screen
  }[props.maxWidth]
})
</script>

<template>
  <teleport to="body">
    <div class="pbx-font-sans">
      <!-- Modal -->
      <div
        v-if="showModalBuilder"
        class="pbx-fixed pbx-inset-0 pbx-z-40 pbx-flex pbx-items-center pbx-justify-center pbx-mx-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
      >
        <!-- Backdrop -->
        <div
          class="pbx-fixed pbx-inset-0 pbx-bg-black/50 pbx-transition-opacity"
          :class="[noBackgroundOpacity ? 'pbx-bg-black/100' : '']"
          @click="handleClose"
        ></div>

        <div
          class="pbx-relative pbx-inline-block pbx-bg-white pbx-rounded-xl pbx-text-left pbx-shadow-xl pbx-transform pbx-transition-all pbx-max-w-[96vh] lg:pbx-max-h-[98vh] pbx-max-h-[85vh] pbx-overflow-y-auto pbx-w-full"
          :class="[
            maxWidthClass ? maxWidthClass : '',
            minHeight ? minHeight : '',
            maxHeight ? maxHeight : '',
          ]"
        >
          <div
            class="pbx-h-16 pbx-px-4 pbx-border-0 pbx-border-solid pbx-border-b pbx-border-gray-200 pbx-mb-2 pbx-flex pbx-items-center pbx-justify-between"
            :class="[
              type === 'success' ? 'pbx-bg-white' : '',
              type === 'warning' ? 'pbx-bg-white' : '',
              type === 'danger' ? 'pbx-bg-white' : '',
              type === 'delete' ? 'pbx-bg-white' : '',
            ]"
          >
            <h3
              as="h3"
              class="pbx-myQuaternaryHeader pbx-my-0 pbx-py-0"
              :class="[
                type === 'success' ? 'pbx-text-black' : '',
                type === 'warning' ? 'pbx-text-black' : '',
                type === 'danger' ? 'pbx-text-black' : '',
                type === 'delete' ? 'pbx-text-black' : '',
              ]"
            >
              {{ title }}
            </h3>
            <div
              class="pbx-h-10 pbx-w-10 pbx-cursor-pointer pbx-rounded-full pbx-flex pbx-items-center pbx-border-none pbx-justify-center pbx-bg-gray-50 pbx-aspect-square hover:pbx-bg-myPrimaryLinkColor hover:pbx-text-white focus-visible:pbx-ring-0 pbx-text-black"
              @click="handleClose"
            >
              <span class="material-symbols-outlined"> close </span>
            </div>
          </div>
          <div class="pbx-px-4 pbx-min-h-32">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>
