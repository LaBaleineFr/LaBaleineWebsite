<template>
  <div class="mw8 mb5 center ph3 ph2-l">
    <h2 class="tc mb4">La team de développeurs de La Baleine</h2>
    <section class="flex flex-wrap justify-between">
      <article class="flex w-100 w-70-m center-m w-40-l pa2 mb4 overflow-hidden bg-white br3 ba b--black-10" v-for="member in team">
        <img :src="member.image" class="br-100 h4 w4 dib ba b--black-05 mr3 self-center" :title="member.name">
        <div class="w-100 flex flex-column justify-center pa2">
          <div class="f4 f3-l b mb2">{{member.name}}</div>
          <div class="f5 gray mb3">{{member.description}}</div>
          <a class="link near-black dim" :href="member.github" target="blank" title="GitHub">
            <github-logo size="25px" />
          </a>
        </div>
      </article>
    </section>
    <div class="w-100 center pa2 overflow-hidden bg-white br3 ba b--black-10">
      <a class="link near-black dim db tc" :href="githubTeam" target="blank" title="GitHub">
        <github-logo size="70px" />
        <div class="f4 f3-l b mt2 mb2">Github La Baleine</div>
      </a>
    </div>
  </div>
</template>

<script>
import config from '../project.config.js';
import { getTeamMembers } from '../data';
import GithubLogo from '../components/GithubLogo.vue';

export default {
  components: {
    GithubLogo,
  },
  data() {
    return {
      team: getTeamMembers(),
      githubTeam: config.github,
    }
  },
  head () {
    return {
      title: `${config.siteName} - L'équipe de La Baleine - ${config.headline}`,
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'L\'équipe de développeurs de La Baleine.'
      }]
    }
  },
}
</script>
