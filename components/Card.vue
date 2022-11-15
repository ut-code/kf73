<template>
  <v-card class="my-7">
    <slot />
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'CardComponent',
})
</script>
