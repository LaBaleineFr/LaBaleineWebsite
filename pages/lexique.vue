<template>
  <div class="mw8 mb5 center ph3 ph2-l">
    <h2 class="mb4 tc">Lexique crypto monnaies</h2>
    <input
      class="input-reset ba b--black-20 pa2 mb4 db w-100"
      type="text"
      placeholder="Quelle définition souhaitez vous rechercher ?"
      v-model="search"
    />
    <dl class="mb4" v-for="entries in glossary">
      <dt class="f4 b lh-title mb2">{{entries.word}}</dt>
      <dd class="mid-gray">{{entries.definition}}</dd>
    </dl>
  </div>
</template>

<script>
import config from '../project.config.js';
import { getGlossary } from '../data';
import { filter, includes } from 'lodash';

export default {
  data() {
    return {
      search: '',
    }
  },
  async asyncData() {
    return {
      fullGlossary: await getGlossary(),
    }
  },
  computed: {
    glossary: function() {
      return filter(this.fullGlossary, (entry) => {
        return includes(entry.word, this.search);
      })
    },
  },
  head () {
    return {
      title: `${config.siteName} - Lexique crypto monnaies - ${config.headline}`,
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Retrouvez les définitions des principaux termes propres aux crypto monnaies, et au trading des crypto monnaies, dans ce glossaire made in La Baleine.'
      }]
    }
  },
}
</script>

<style scoped>
input::placeholder {
  color: silver;
}
</style>
