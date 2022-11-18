<template>
  <div class="d-inline-block my-1 mr-2">
    <v-chip color="primary" outlined>
      <slot />
    </v-chip>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'TagChip',
})
</script>

