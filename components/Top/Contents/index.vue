<template>
  <div>
    <kikaku-card
      v-for="(content, i) in contents"
      :key="content.title"
      :number="i + 1"
      :content="content"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import KikakuCard from './Card.vue'
import { contents } from '~/assets/contents'

export default Vue.extend({
  name: 'KikakuComponent',
  components: { KikakuCard },
  data: () => ({
    contents,
  }),
})
</script>
