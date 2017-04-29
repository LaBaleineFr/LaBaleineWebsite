<template>
  <div class="mw8 center ph4 ph2-l">
    <h2 class="f5 bg-light-gray mb5 pa3 br2 tc">{{opening}}</h2>
    <section class="flex flex-wrap justify-around mb5">
      <Card title="Twitter" url="https://twitter.com/BaleineFR" image="twitter.svg" />
      <Card title="Twitch" url="https://www.twitch.tv/baleinefr" image="twitch.svg" />
      <Card title="Youtube" url="https://www.youtube.com/channel/UCdEgqcbima-Bv5jnArrXiKA?feature=hovercard?&ab_channel=LaBaleine" image="youtube.png" />
      <Card title="Discord" url="https://discordapp.com/invite/2YY5EUt" image="discord.svg" />
    </section>
    <section class="mb5">
      <Faq />
    </section>
  </div>
</template>

<script>
import config from '../config/project.js';
import Card from '../components/Card.vue';
import Faq from '../components/Faq.vue';

export default {
  components: {
    Card,
    Faq,
  },
  data() {
    return {
      opening: config.opening,
    }
  },
}
</script>
