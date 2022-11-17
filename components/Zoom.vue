<template>
  <div>
    <template v-if="beingHeld">
      <!-- <external-button :url="zoomUrl"> ZOOMで相談する </external-button> -->
      <div class="text-center">
        <v-dialog v-model="dialog" width="500">
          <template #activator="{ on, attrs }">
            <v-btn block v-bind="attrs" v-on="on"> ZOOMで相談する </v-btn>
          </template>
          <v-card>
            <v-card-title class="text-h5"> Zoomについて </v-card-title>
            <v-card-text>
              <ul>
                <li>カメラをオンにする必要はありません。</li>
                <li>
                  <span class="primary--text">録画・録音・撮影は禁止</span
                  >です。
                </li>
                <li>ut.code(); では録画・録音・撮影を行いません。</li>
              </ul>
              <external-button :url="zoomUrl" class="primary">
                ZOOMを開く
              </external-button>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialog = false">
                閉じる
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </template>
    <template v-else>
      <p>駒場祭期間中はZOOMでの相談が可能です。</p>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ExternalButton from '@/components/Button/External.vue'

import { zoomUrl } from '~/assets/urls'
import { beingHeld } from '~/assets/time'

export default Vue.extend({
  name: 'ZoomComponent',
  components: { ExternalButton },
  data: () => ({
    zoomUrl,
    beingHeld,
    dialog: false,
  }),
})
</script>
