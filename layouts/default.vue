<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-toolbar-title>
        <router-link to="/" class="top-title-link info--text">
          {{ title }}
        </router-link>
      </v-toolbar-title>
      <v-spacer />
      <icon-button icon-name="mdi-vote" url="#prix" />
      <icon-button icon-name="mdi-cash" url="#kampa" />
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row justify="center" align="center">
          <v-col cols="16" sm="10" md="8">
            <Nuxt />
          </v-col>
        </v-row>
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
  font-size: 20px;
}
</style>