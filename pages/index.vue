<template>
  <div class="mw8 center ph3 ph2-l">
    <h1 class="f5 bg-light-gray mb4 pa3 br2 tc">{{opening}}</h1>
    <h2 class="tc mb4">Les projets de La baleine</h2>
    <section class="flex flex-wrap justify-around justify-between-ns mb4">
      <ProjectCard :project="project" v-for="project in projects" :key="project.name" />
    </section>
    <h2 class="tc mb4">Nos partenaires</h2>
    <section class="flex flex-wrap justify-around justify-between-ns mw7 mb5 center">
      <PartnerCard :partner="partner" v-for="partner in partners" :key="partner.name" />
    </section>
  </div>
</template>

<script>
import config from '../project.config.js';
import { getTeamMembers, getProjects, getPartners } from '../data';
import ProjectCard from '../components/ProjectCard.vue';
import PartnerCard from '../components/PartnerCard.vue';

export default {
  components: {
    ProjectCard,
    PartnerCard,
  },
  data() {
    return {
      opening: config.opening,
      githubTeam: config.github,
      projects: getProjects(),
      partners: getPartners(),
    }
  },
  head () {
    return {
      meta: [{
        hid: 'google-site-verification',
        name: 'google-site-verification',
        content: 'VMDDDoCxlz1w3oCjkCH8X_kLOp64kshjKKS5DPtDlOw'
      }]
    }
  },
}
</script>
