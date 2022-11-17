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
        <zoom v-if="!nozoom" />
      </template>
      <template v-else>
        <p><span class="primary--text">現在準備中</span></p>
      </template>
    </v-card-text>
  </card>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import Card from '~/components/Card.vue'
import ExternalButton from '@/components/Button/External.vue'
import Zoom from '~/components/Zoom.vue'

export default Vue.extend({
  name: 'KikakuCardComponent',
  components: { Card, ExternalButton, Zoom },
  props: {
    number: { type: Number, required: true },
    content: { type: Object as PropType<Content>, required: true },
    nozoom: { type: Boolean, required: false, default: false },
  },
})
</script>
