<template>
  <external-button
    :url="`http://twitter.com/share?url=${url}&text=${shortName}&related=@utokyo_code&hashtags=駒場祭にあかねさす`"
  >
    このページをツイートする
  </external-button>
</template>

<script lang="ts">
import Vue from 'vue'
import ExternalButton from '@/components/Button/External.vue'
import { shortName, url } from '@/assets/baseInfo'

export default Vue.extend({
  name: 'ExternalButtonComponent',
  components: { ExternalButton },
  data: () => ({
    url,
    shortName,
  }),
})
</script>
