<template>
  <v-btn block :href="url" target="_blank" class="my-4">
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
})
</script>
