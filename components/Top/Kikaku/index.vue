<template>
  <div>
    <kikaku-card
      v-for="(content, i) in contents"
      :key="content.title"
      :number="i + 1"
      :content="content"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import KikakuCard from './Card.vue'

export default Vue.extend({
  name: 'KikakuComponent',
  components: { KikakuCard },
  data: () => ({
    contents: [
      {
        title: 'はじめてのプログラミング教室',
        target: '未就学児〜大人',
        messages: [
          '「はじめてのプログラミング教室」はut.code(); がこれまでの学園祭でも提供してきた、自慢のコンテンツです。',
          'ブロックを並べて、積み木感覚で、誰でも簡単にプログラミングに触れることができます。',
        ],
        url: '',
      },
      // ゲームのAIを組んでみよう
      // 対象：小学生〜大人
      // 機械学習に挑戦！？
      // 対象：小学校3年生〜大人
      // タイピングゲームバトル
      // 対象：小学校3年生〜大人
      // ブロックを使ってプログラミング「言語」を作ってみよう
      // 対象：中学生〜大人 プログラミング経験者
      // はじめてのアプリづくり！
      // 対象：小学校1年生〜小学校6年生
      // ウェブ開発入門編
      // 対象：小学校3年生〜大人
    ],
  }),
})
</script>
