<template>
  <div class="mw8 mb5 center ph3 ph2-l">
    <h2 class="f5 bg-light-gray mb5 pa3 br2 tc">{{opening}}</h2>
    <section class="flex flex-wrap justify-around mb5">
      <SocialCard title="Twitter" :url="twitterUrl" image="twitter.svg" />
      <SocialCard title="Twitch" :url="twitchUrl" image="twitch.svg" />
      <SocialCard title="Youtube" :url="youtubeUrl" image="youtube.png" />
      <SocialCard title="Discord" :url="discordUrl" image="discord.svg" />
    </section>
  </div>
</template>

<script>
import config from '../project.config.js';
import SocialCard from '../components/SocialCard.vue';

export default {
  components: {
    SocialCard,
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
