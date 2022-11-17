<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-toolbar-title>
        <router-link to="/" class="top-title-link">{{ title }}</router-link>
      </v-toolbar-title>
      <v-spacer />
      <icon-button icon-name="mdi-vote" url="#prix" />
      <icon-button icon-name="mdi-cash" url="#kampa" />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer absolute app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import iconButton from '~/components/Button/Icon.vue'
import { title } from '~/assets/baseInfo.js'

export default {
  name: 'DefaultLayout',
  components: { iconButton },
  data() {
    return {
      title,
    }
  },
}
</script>

<style scoped>
.top-title-link {
  text-decoration: none;
  color: #000000de;
  font-size: 20px;
}
</style>