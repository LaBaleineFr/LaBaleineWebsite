<template>
  <div class="mw8 mb5 center ph4 ph2-l">
    <h2 class="f5 bg-light-gray mb5 pa3 br2 tc">{{opening}}</h2>
    <section class="flex flex-wrap justify-around mb5">
      <Card title="Twitter" :url="twitterUrl" image="twitter.svg" />
      <Card title="Twitch" :url="twitchUrl" image="twitch.svg" />
      <Card title="Youtube" :url="youtubeUrl" image="youtube.png" />
      <Card title="Discord" :url="discordUrl" image="discord.svg" />
    </section>
    <section class="w-100 w-60-l mw-100 center mt4">
      <article class="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/STwOr0nYz1I" frameborder="0" allowfullscreen></iframe>
      </article>
    </section>
  </div>
</template>

<script>
import config from '../project.config.js';
import Card from '../components/Card.vue';

export default {
  components: {
    Card,
  },
  data() {
    return {
      opening: config.opening,
      twitterUrl: config.twitterUrl,
      twitchUrl: config.twitchUrl,
      youtubeUrl: config.youtubeUrl,
      discordUrl: config.discordUrl,
    }
  },
}
</script>
