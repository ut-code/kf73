<template>
  <div>
    <template v-if="beingHeld">
      <external-button :url="zoomUrl"> ZOOMで相談する </external-button>
    </template>
    <template v-else>
      <p>駒場祭期間中はZOOMでの相談が可能です。</p>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { zoomUrl } from '~/assets/urls'
import { beingHeld } from '~/assets/time'

export default Vue.extend({
  name: 'ZoomComponent',
  data: () => ({
    zoomUrl,
    beingHeld,
  }),
})
</script>
