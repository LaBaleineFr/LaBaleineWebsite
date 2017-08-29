<template>
  <div class="mw8 mb5 center ph3 ph2-l">
    <div v-for="ressource in ressources">
      <h2 class="mb3">{{ressource.title}}</h2>
      <div class="flex flex-wrap mb4">
        <RessourceCard :name="link.name" :description="link.description" :url="link.url" v-for="link in ressource.links" :key="link.name" />
      </div>
    </div>
    <div class="f7">* Liens de parrainage. recevez 10$ dès 100$ d’achat (cela couvre donc les frais par CB) et nous aussi.</div>
  </div>
</template>

<script>
import config from '../project.config.js';
import { getRessources } from '../data';
import RessourceCard from '../components/RessourceCard.vue';

export default {
  components: {
    RessourceCard,
  },
  data() {
    return {
      ressources: getRessources(),
    }
  },
  head () {
    return {
      title: `${config.siteName} - Ressources et liens utiles - ${config.headline}`,
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Retrouvez la liste des sites, applications, et outils indispensables pour l\'achat et le trading des crypto monnaies. Sites de news et d\'informations, suivi du cours des monnaies, tout y est.'
      }]
    }
  },
}
</script>
