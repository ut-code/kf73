<template>
  <card>
    <v-card-title class="headLine">プログラマー診断</v-card-title>
    <v-card-text>
      <p>question</p>
    </v-card-text>
    <v-card-actions>
      <v-btn text> yes </v-btn>
      <v-btn text> no </v-btn>
    </v-card-actions>
  </card>
</template>

<script>
import Card from '~/components/Card.vue'

export default {
  name: 'IndexPage',
  components: { Card },
  data: () => ({}),
}
</script>
