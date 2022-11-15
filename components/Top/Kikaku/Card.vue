<template>
  <card>
    <v-card-title class="headline primary white--text mb-3">
      {{ number }}. {{ content.title }}
    </v-card-title>
    <v-card-text>
      <p>対象：{{ content.target }}</p>
      <p v-for="message in content.messages" :key="message">{{ message }}</p>
      <external-button :url="content.url">
        このコンテンツで遊ぶ
      </external-button>
    </v-card-text>
  </card>
</template>

<script lang="ts">
import Vue from 'vue'
import Card from '~/components/Card.vue'
import ExternalButton from '@/components/Button/External.vue'

export default Vue.extend({
  name: 'KikakuCardComponent',
  components: { Card, ExternalButton },
  props: {
    number: { type: Number, required: true },
    content: { type: Object, required: true },
  },
})
</script>
