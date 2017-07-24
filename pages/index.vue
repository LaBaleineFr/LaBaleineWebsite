<template>
  <div class="mw8 center ph3 ph2-l">
    <h1 class="f5 bg-light-gray mb5 pa3 br2 tc">{{opening}}</h1>
    <h2 class="tc mb4">Les projets de La baleine</h2>
    <section class="flex flex-wrap justify-around justify-between-ns mb5">
      <ProjectCard :project="project" v-for="project in projects" :key="project.name" />
    </section>
    <h2 class="tc mb4">La team La Baleine</h2>
    <section class="flex flex-wrap justify-around justify-between-ns mb5">
      <MemberCard :member="member" v-for="member in members" :key="member.name" />
    </section>
  </div>
</template>

<script>
import config from '../project.config.js';
import { getTeamMembers, getProjects } from '../data';
import MemberCard from '../components/MemberCard.vue';
import ProjectCard from '../components/ProjectCard.vue';

export default {
  components: {
    MemberCard,
    ProjectCard,
  },
  data() {
    return {
      opening: config.opening,
      githubTeam: config.github,
      members: getTeamMembers(),
      projects: getProjects(),
    }
  },
}
</script>
