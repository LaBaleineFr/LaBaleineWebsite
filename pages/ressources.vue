<template>
  <div class="mw8 mb5 center ph4 ph2-l">
    <h2 class="mb3">Achat et trading de crypto monnaies</h2>
    <ul>
      <li class="list lh-title mb1">
        <a class="link dim" href="https://www.kraken.com/" target="blank">Kraken: </a>Achat de bitcoin par virement
      </li>
      <li class="list lh-title mb1">
        <a class="link dim" href="https://cex.io/r/0/up104814358/0/" target="blank">Cex.io*: </a>Achat de bitcoin par carte bancaire avec limite élevée*
      </li>
      <li class="list lh-title mb1">
        <a class="link dim" href="https://goo.gl/ApG4V7" target="blank">Coinbase*: </a>Achat de bitcoin par carte bancaire
      </li>
      <li class="list lh-title mb1">
        <a class="link dim" href="https://bittrex.com/" target="blank">Bittrex	: </a>Plateforme d'échange de crypto monnaie
      </li>
      <li class="list lh-title mb1">
        <a class="link dim" href="https://poloniex.com/" target="blank">Poloniex: </a>Plateforme d'échange de crypto monnaie
      </li>
    </ul>
    <div class="f7 mt2 mb4">* Liens de parrainage. recevez 10$ dès 100$ d’achat (cela couvre donc les frais par CB) et nous aussi.</div>

    <h2 class="mb3">Informations sur les crypto monnaies</h2>
    <ul class="mb4">
      <li class="list lh-title mb1">
        <a class="link dim" href="http://bitcointicker.co/news/" target="blank">Bitcointicker: </a>Cours du bitcoin + news sur la monnaie
      </li>
      <li class="list lh-title mb1">
        <a class="link dim" href="https://coinmarketcap.com/" target="blank">CoinMarCap: </a>Site regroupant le prix de +600 cryptos
      </li>
      <li class="list lh-title mb1">
        <a class="link dim" href="https://bitcointalk.org" target="blank">Bitcointalk: </a>Principal forum sur les crypto monnaies (anglais et français)
      </li>
      <li class="list lh-title mb1">
        <a class="link dim" href="https://twitter.com/brykou/lists/crypto" target="blank">Liste twitter: </a>Liste Twitter regroupant les comptes les plus importants
      </li>
    </ul>

    <h2 class="mb3">Outils et applications</h2>
    <ul>
      <li class="list lh-title mb1">
        <a class="link dim" href="/cryptoProjectionBaleine.xlsx" target="blank">Projection des gains: </a>Tableur excel permettant de suivre et d'estimer ses gains futurs
      </li>
      <li class="list lh-title mb1">
        <a class="link dim" href="http://blockfolio.com/" target="blank">Blockfolio: </a>Application mobile permettant de suivre le cours des crypto monnaies
      </li>
    </ul>
  </div>
</template>

<script>
import config from '../project.config.js';

export default {
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
