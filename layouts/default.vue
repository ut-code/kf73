<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon href="#prix">
        <v-icon>mdi-vote</v-icon>
      </v-btn>
      <v-btn icon href="#kampa">
        <v-icon>mdi-cash</v-icon>
      </v-btn>
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
import { title } from '~/assets/baseInfo.js'

export default {
  name: 'DefaultLayout',
  data() {
    return {
      title,
    }
  },
}
</script>
