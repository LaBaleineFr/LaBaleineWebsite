<template>
  <div class="mw8 center ph3 ph2-l flex flex-wrap justify-around justify-between-ns mb5 mt5">
    <ProjectCard :project="miningPool" v-for="miningPool in miningPools" :key="miningPool.name" />
  </div>
</template>

<script>
import config from '../../project.config.js';
import { getMiningPools } from '../../data';
import ProjectCard from '../../components/ProjectCard.vue';

export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      miningPools: getMiningPools(),
    }
  },
  head () {
    return {
      title: `${config.siteName} - Mining pool`,
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Minez facilement et efficacement des crypto monnaies avec la pool de minage La Baleine.'
      }]
    }
  },
}
</script>
