<template>
  <div class="mw8 center ph3 ph2-l">
    <h2 class="tc mb4">La team La Baleine</h2>
    <section class="flex flex-wrap justify-around justify-between-ns mb5">
      <MemberCard :member="member" v-for="member in members" :key="member.name" />
    </section>
  </div>
</template>

<script>
import config from '../project.config.js';
import { getTeamMembers } from '../data';
import MemberCard from '../components/MemberCard.vue';

export default {
  components: {
    MemberCard,
  },
  data() {
    return {
      members: getTeamMembers(),
    }
  },
  head () {
    return {
      title: `${config.siteName} - La team La Baleine - ${config.headline}`,
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Découvrez un partie des membres de La Baleine qui s\'investissent pour faire avancer la communauté.'
      }]
    }
  },
}
</script>
