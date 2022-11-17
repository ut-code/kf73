declare type Content = {
  title: string
  target: string
  messages: string[]
  url: string
}

declare module 'vue/types/vue' {
  interface Vue {
    $gtag: any
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $gtag: any
  }
}
