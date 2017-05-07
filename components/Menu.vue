<template>
  <nav class="db dt-l w-100 border-box pa3 ph5-l bg-near-black">
    <a class="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="/" title="Home">
      <img class="w2 fl mr1" src="/favicon.ico" alt="Logo">
      <span class="white b f3" style="line-height: 2rem">{{siteName}}</span>
    </a>
    <div class="db dtc-l v-mid w-100 w-75-l tc tr-l">
      <a class="link white dim f6 f5-l dib mr3 mr4-l" href="/bien-commencer" title="Comment bien commencer ?">
        Comment bien commencer ?
      </a>
      <a class="link white dim f6 f5-l dib" href="/ressources" title="Ressources">Ressources</a>
    </div>
  </nav>
</template>

<script>
import config from '../config/project.js';

export default {
  data(context) {
    return {
      siteName: config.siteName,
    }
  },
}
</script>
