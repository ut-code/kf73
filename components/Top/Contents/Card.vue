<template>
  <card>
    <v-card-title class="headline primary white--text mb-3">
      {{ number }}. {{ content.title }}
    </v-card-title>
    <v-card-text>
      <p>対象：{{ content.target }}</p>
      <p v-for="message in content.messages" :key="message">{{ message }}</p>
      <template v-if="content.url">
        <external-button :url="content.url">
          このコンテンツで遊ぶ
        </external-button>
        <template v-if="beingHeld">
          <external-button :url="zoomUrl"> ZOOMで相談する </external-button>
        </template>
        <template v-else>
          <p>駒場祭期間中はZOOMでの相談が可能です。</p>
        </template>
      </template>
      <template v-else>
        <p class="primary--text">現在準備中です。</p>
      </template>
    </v-card-text>
  </card>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import Card from '~/components/Card.vue'
import ExternalButton from '@/components/Button/External.vue'
import { zoomUrl } from '~/assets/contents'
import { beingHeld } from '~/assets/time'

export default Vue.extend({
  name: 'KikakuCardComponent',
  components: { Card, ExternalButton },
  props: {
    number: { type: Number, required: true },
    content: { type: Object as PropType<Content>, required: true },
  },
  data: () => ({
    zoomUrl,
    beingHeld,
  }),
})
</script>
