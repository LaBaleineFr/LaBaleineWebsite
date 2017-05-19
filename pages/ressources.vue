<template>
  <div class="mw8 mb5 center ph4 ph2-l">
    <div class="mb4" v-for="ressource in ressources">
      <h2 class="mb3">{{ressource.title}}</h2>
      <dl v-for="link in ressource.links">
        <dt class="list mb2 mr1 dib">
          <a class="link dim" :href="link.url" target="blank">{{link.name}}: </a>
        </dt>
        <dd class="dib">{{link.description}}</dd>
      </dl>
    </div>
    <div class="f7">* Liens de parrainage. recevez 10$ dès 100$ d’achat (cela couvre donc les frais par CB) et nous aussi.</div>
  </div>
</template>

<script>
import config from '../project.config.js';
import { getRessources } from '../data';

export default {
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
