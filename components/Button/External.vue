<template>
  <v-btn block :href="url" target="_blank" class="my-4" @click="clickHandler">
    <slot />
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ExternalButtonComponent',
  props: {
    url: { type: String, required: true },
  },
  methods: {
    clickHandler() {
      // @ts-ignore
      this.$gtag('event', 'click', {
        event_category: 'link',
        event_label: 'external',
        value: this.url,
      })
    },
  },
})
</script>
