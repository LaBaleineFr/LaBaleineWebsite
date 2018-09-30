<template>
  <nav class="db dt-l w-100 border-box mb4 pa3 ph5-l bg-near-black">
    <a class="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="/" title="Home">
      <img class="w2 fl mr1" src="/favicon.ico" alt="Logo">
      <span class="white b f3" style="line-height: 2rem">{{siteName}}</span>
    </a>
    <div class="db dtc-l v-mid w-100 w-75-l tc tr-l">
      <a class="link white dim f6 f5-l dib mr3 mr4-l" href="/lexique" title="Définitions des termes utilisés dans le milieu des crypto monnaies">
        Lexique
      </a>
      <a class="link white dim f6 f5-l dib mr4-l" href="/ressources" title="Toutes les ressources indispensables pour le crypto trading">
        Ressources
      </a>
    </div>
  </nav>
</template>

<script>
import config from '../project.config.js';

export default {
  name: 'Menu',
  data(context) {
    return {
      siteName: config.siteName,
    }
  },
}
</script>
