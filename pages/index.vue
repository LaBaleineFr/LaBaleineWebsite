<template>
  <div class="mw8 center ph3 ph2-l">
    <h1 class="f5 bg-light-gray mb5 pa3 br2 tc">{{opening}}</h1>
    <h2 class="tc mb4">La team La Baleine</h2>
    <section class="flex flex-wrap justify-around justify-between-ns mb5">
      <MemberCard :member="member" v-for="member in members" :key="member.name" />
      <div class="w-100 center pa2 overflow-hidden bg-white br3 ba b--black-10">
        <a class="link near-black dim db tc" :href="githubTeam" target="blank" title="GitHub">
          <github-logo size="70px" />
          <div class="f4 f3-l b mt2 mb2">Github La Baleine</div>
        </a>
      </div>
    </section>
    <h2 class="tc mb4">Rejoignez-nous !</h2>
    <section class="flex flex-wrap justify-around justify-between-ns">
      <SocialCard title="Twitter" :url="twitterUrl" image="twitter.svg" />
      <SocialCard title="Twitch" :url="twitchUrl" image="twitch.svg" />
      <SocialCard title="Youtube" :url="youtubeUrl" image="youtube.png" />
      <SocialCard title="Discord" :url="discordUrl" image="discord.svg" />
    </section>
  </div>
</template>

<script>
import config from '../project.config.js';
import { getTeamMembers } from '../data';
import SocialCard from '../components/SocialCard.vue';
import MemberCard from '../components/MemberCard.vue';
import GithubLogo from '../components/GithubLogo.vue';

export default {
  components: {
    SocialCard,
    MemberCard,
    GithubLogo,
  },
  data() {
    return {
      opening: config.opening,
      twitterUrl: config.twitterUrl,
      twitchUrl: config.twitchUrl,
      youtubeUrl: config.youtubeUrl,
      discordUrl: config.discordUrl,
      githubTeam: config.github,
      members: getTeamMembers(),
    }
  },
}
</script>
