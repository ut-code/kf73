<template>
  <v-btn block :href="url" class="my-4">
    <slot />
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'InrenalButtonComponent',
  props: {
    url: { type: String, required: true },
  },
})
</script>
