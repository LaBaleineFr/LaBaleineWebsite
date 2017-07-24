<template>
  <footer class="bg-black white">
    <div class="bg-white pt4 pb3">
      <h2 class="tc mb3 black">Rejoignez-nous !</h2>
      <section class="flex flex-wrap justify-around justify-between-ns mw8 center">
        <SocialCard title="Twitter" :url="twitterUrl" image="twitter.svg" />
        <SocialCard title="Twitch" :url="twitchUrl" image="twitch.svg" />
        <SocialCard title="Youtube" :url="youtubeUrl" image="youtube.png" />
        <SocialCard title="Discord" :url="discordUrl" image="discord.svg" />
        <SocialCard title="Github" :url="githubUrl" image="github.svg" />
      </section>
    </div>
    <div class="flex flex-wrap justify-around mw7 center pv3">
      <div class="f3 mb3 mb0-ns">{{label}}</div>
      <div class="tc mb3 mb0-ns">
        <div class="f5 mb2">Contact</div>
        <div class="f7 white-70">{{email}}</div>
      </div>
      <div class="tc">
        <div class="f5 mb2">Soutenir (btc)</div>
        <div class="f7 white-70">17qGFLZV1tCHaTU8G7gH2zht7y9cxYHWJE</div>
      </div>
    </div>
  </footer>
</template>

<script>
import config from '../project.config.js';
import SocialCard from '../components/SocialCard.vue';

export default {
  name: 'Footer',
  components: {
    SocialCard,
  },
  data() {
    return {
      label:`${config.siteName} © ${new Date().getFullYear()}`,
      email:config.email,
      twitterUrl: config.twitterUrl,
      twitchUrl: config.twitchUrl,
      youtubeUrl: config.youtubeUrl,
      discordUrl: config.discordUrl,
      githubUrl: config.githubUrl,
    }
  },
}
</script>
