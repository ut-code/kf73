<template>
  <v-row justify="center" align="center">
    <v-col cols="16" sm="10" md="8">
      <card>
        <v-card-title class="headline primary--text">
          {{ shortName }}
        </v-card-title>
        <v-card-text>
          <p>ut.code(); の第73回駒場祭企画へようこそ！</p>
          <p>
            「{{ shortName }}」は、皆さま全員に向けた企画です。<br />
            プログラマーの方も、プログラミングをやったことない方も、お楽しみいただけます。<br />
            お子さまも、親御さんも、学生さんも、社会人の方も、お楽しみいただけます。
          </p>
          <carousel />
          <p>
            小学校教育にも取り込まれ、どんどん身近になってきたプログラミング。<br />
            「難しそう……」なんて思ったりして、自分とは縁のないもののように感じていませんか？<br />
            この企画を通して、ちょっと詳しく、もっと好きになってくだされば幸いです。
          </p>
          <share-button />
        </v-card-text>
        <v-card-title> 開催期間 </v-card-title>
        <v-card-text>
          <p>「{{ shortName }}」は以下の日程で開催します。</p>
          <ul class="mb-4">
            <li>2022年11月18日 9:00〜18:00</li>
            <li>2022年11月19日 9:00〜18:00</li>
            <li>2022年11月20日 9:00〜15:00</li>
          </ul>
          <p>
            現在、
            <span class="primary--text">
              {{ beingHeld ? '開催期間中' : '開催期間外' }}
            </span>
            です。
          </p>
        </v-card-text>
        <v-card-title> ut.code(); とは </v-card-title>
        <v-card-text>
          <tatami>
            <p>
              ut.code();（ゆーてぃーこーど）は2019年に発足し、今年で結成4年目を迎えた、東京大学のプログラミングサークルです。<br />
              東大に多々あるプログラミングサークルの中では「ソフトウェア開発」に重きをおく点が特徴となっています。
              集まってわいわいと「あったら便利なもの」「自分が欲しかったもの」を開発しています。
            </p>
            <external-button url="https://utcode.net/">
              公式ウェブサイト
            </external-button>
            <external-button url="https://twitter.com/utokyo_code">
              公式Twitter
            </external-button>
          </tatami>
        </v-card-text>
        <v-card-title> 駒場祭とは </v-card-title>
        <v-card-text>
          <tatami>
            <p>
              東京大学の学園祭の1つであり、毎年11月の中旬〜下旬に3日間、駒場キャンパスにて開催されます。
            </p>
            <p>
              今年は新型コロナウイルス感染症の影響を受けつつ、人数制限があるもののキャンパスに来場者が入れる形での開催となりました。<br />
              ut.code();
              のコンテンツは、オンラインでも、キャンパスでも、お楽しみいただけます。
            </p>
            <external-button url="https://visitor.komabasai.net/73/visitor/">
              公式ウェブサイト
            </external-button>
          </tatami>
        </v-card-text>
      </card>
      <contents />
      <card>
        <v-card-title id="prix" class="headline">
          投票のお願い
          <v-spacer />
          <v-icon>mdi-vote</v-icon>
        </v-card-title>
        <v-card-text>
          <p>
            ご来場の皆さまの投票によって、受賞企画が決定する駒場グランプリにて、グランプリ受賞を目指しています。<br />
            お手数ですが、以下からご投票いただければ幸いです。
          </p>
          <p>よろしくお願いいたします。</p>
          <external-button url="https://visitor.komabasai.net/73/visitor/prix">
            駒場グランプリ
          </external-button>
        </v-card-text>
      </card>
      <card>
        <v-card-title id="kampa" class="headline">
          カンパのお願い
          <v-spacer />
          <v-icon>mdi-cash</v-icon>
        </v-card-title>
        <v-card-text>
          <p>
            第73回駒場祭企画では、お貸しする用のPCのレンタル費・ポスターの印刷費など、費用がかかっております。<br />
            カンパと言う形で、ご参加いただいた皆さまから少しでも支援いただければ幸いです。
          </p>
          <p>よろしくお願いいたします。</p>
          <ul>
            <li>カンパするか否かと金額については任意です。</li>
            <li>
              カンパで集めた金銭は ut.code();
              が駒場祭をする上でかかった必要経費の補填に充てさせていただきます。<br />
              もし必要経費を超えた場合、来年以降の学園祭における活動資金とさせていただきます。
            </li>
          </ul>
          <external-button :url="paypayUrl"> PayPay </external-button>
          <p>PCからご覧の方は以下の二次元コードを読み取ってください。</p>
          <div justify="center" align="center" width="50%">
            <v-img width="50%" src="/paypay.svg" />
          </div>
        </v-card-text>
      </card>
      <card>
        <v-card-title id="contact" class="headline">
          お問い合わせ
        </v-card-title>
        <v-card-text>
          <p>
            問い合わせは festival〜utcode.net
            にメールをいただくか、以下のSNSからお願いいたします。<br />
            spam対策で@を〜に変更しています。
          </p>
          <p>
            なお ut.code();
            では、プログラミングを始めてみたい、新しいスキルを身につけたいという学生を常時募集しています！<br />
            ご興味をお持ちの方は、ぜひご連絡ください！
          </p>
          <external-button url="https://twitter.com/utokyo_code">
            公式Twitter
          </external-button>
          <external-button url="https://line.me/ti/p/%40nlr3843e">
            公式LINE
          </external-button>
          <zoom />
        </v-card-text>
      </card>
      <card>
        <v-card-text>
          <share-button />
        </v-card-text>
      </card>
    </v-col>
  </v-row>
</template>

<script>
import Card from '~/components/Card.vue'
import Carousel from '~/components/Top/Carousel.vue'
import Contents from '@/components/Top/Contents/index.vue'
import ExternalButton from '@/components/Button/External.vue'
import ShareButton from '@/components/Button/Share.vue'
import Tatami from '@/components/Tatami.vue'
import { shortName } from '~/assets/baseInfo'
import { paypayUrl } from '~/assets/urls'
import { beingHeld } from '~/assets/time'

export default {
  name: 'IndexPage',
  components: { Card, Carousel, Contents, ExternalButton, ShareButton, Tatami },
  data: () => ({
    paypayUrl,
    beingHeld,
    shortName,
  }),
}
</script>
