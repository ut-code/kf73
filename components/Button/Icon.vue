<template>
  <v-btn icon :to="url" @cliclk="clickHandler">
    <v-icon>{{ iconName }}</v-icon>
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IconButtonComponent',
  props: {
    url: { type: String, required: true },
    iconName: { type: String, required: true },
  },
  methods: {
    clickHandler() {
      // @ts-ignore
      this.$gtag('event', 'iconButtonClicl', {
        event_category: 'link',
        event_label: 'icon',
        value: this.url,
      })
    },
  },
})
</script>
