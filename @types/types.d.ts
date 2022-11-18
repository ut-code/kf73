declare type Tag = 'ai' | 'block' | 'coding' | 'game'
declare type Content = {
  title: string
  target: string
  tags: Tag[]
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
