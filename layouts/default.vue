<template>
  <div>
    <nav class="w-100 pa3 bg-near-black tc">
      <a class="link dim white f6 f5-ns dib" href="/" title="La baleine - page d'acceuil">
        <img class="w2 fl mr1" src="favicon.ico" alt="Logo">
        <span style="line-height: 2rem">{{siteName}}</span>
      </a>
    </nav>
    <header class="w-100 mb5 bg-center cover" v-bind:style="{backgroundImage: 'url(banner.png)', height: '400px'}">
      <div class="tc h-100 bg-black-10 relative">
        <h1 class="dib f3 b no-underline mid-gray absolute bottom-0 left-0 w-100">
          {{headline}}
        </h1>
      </div>
    </header>
    <nuxt/>
    <app-footer/>
  </div>
</template>

<script>
import AppFooter from '~components/Footer.vue'
import config from '../config/project.js';

export default {
  data(context) {
    return {
      bannerUrl: config.bannerUrl,
      headline: config.headline,
      siteName: config.siteName,
    }
  },
  components: {
    AppFooter
  }
}
</script>
