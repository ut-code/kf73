<template>
  <div>
    <v-expand-transition>
      <div v-show="show" class="px-5">
        <slot />
      </div>
    </v-expand-transition>
    <v-btn class="mb-4" block @click="show = !show">
      {{ !show ? '詳しく見る' : '閉じる' }}
      <v-spacer />
      <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'TatamiComponent',
  data: () => ({
    show: false,
  }),
})
</script>
