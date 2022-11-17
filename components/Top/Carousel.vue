<template>
  <v-carousel
    v-model="model"
    hide-delimiters
    width="100%"
    height="auto"
    class="my-5"
  >
    <v-responsive :aspect-ratio="9 / 5">
      <v-carousel-item v-for="key in 4" :key="key">
        <v-img
          :src="require(`@/assets/introImage/${key}.png`)"
          class="m-0"
          :alt="`紹介画像${key}`"
        />
      </v-carousel-item>
    </v-responsive>
  </v-carousel>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'CaruouselComponent',
  data: () => ({
    model: 0,
  }),
  mounted() {
    setInterval(() => {
      this.model++
    }, 2 * 1000)
  },
})
</script>
