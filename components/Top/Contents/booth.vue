<template>
  <div class="card-list">
    <div
      v-for="(content, i) in contents"
      :key="content.title"
      class="card"
      :style="`width:${width}; height:${height};`"
    >
      <kikaku-card :number="i + 1" :content="content" :nozoom="true" />
    </div>
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
  computed: {
    width() {
      const count = this.contents.length
      if (count <= 3) {
        return `${(100 - 2 * (count + 1)) / count}vw`
      } else if (count % 2 === 0) {
        return `${(100 - 2 * (count / 2 + 1)) / (count / 2)}vw`
      } else {
        return `${(100 - 2 * ((count + 1) / 2 + 1)) / ((count + 1) / 2)}vw`
      }
    },
    height() {
      const count = this.contents.length
      if (count <= 3) {
        return `${100 - 2 * 2}vh`
      } else {
        return `${(100 - 2 * 3) / 2}vh`
      }
    },
  },
})
</script>

<style scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  align-content: space-around;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

div.card {
  overflow: hidden;
  margin: 1vh 1vw;
}
</style>