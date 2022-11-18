<template>
  <card>
    <v-card-title class="headline primary white--text mb-3">
      {{ number }}. {{ content.title }}
    </v-card-title>
    <v-card-text>
      <p>対象：{{ content.target }}</p>
      <div class="mb-5">
        <tag-chip v-for="tag in content.tags" :key="tag">
          {{ getTagText(tag) }}
        </tag-chip>
      </div>
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
import TagChip from '~/components/Top/Contents/TagChip.vue'
import Card from '~/components/Card.vue'
import ExternalButton from '@/components/Button/External.vue'
import Zoom from '~/components/Zoom.vue'

export default Vue.extend({
  name: 'KikakuCardComponent',
  components: { Card, ExternalButton, TagChip, Zoom },
  props: {
    number: { type: Number, required: true },
    content: { type: Object as PropType<Content>, required: true },
    nozoom: { type: Boolean, required: false, default: false },
  },
  methods: {
    getTagText(tag: Tag) {
      switch (tag) {
        case 'ai':
          return 'AI（人工知能）'
        case 'block':
          return 'ブロックプラグラミング'
        case 'coding':
          return 'コーディング'
        case 'game':
          return 'ゲーム'
      }
    },
  },
})
</script>
