<template>
  <article class="mw8 mb5 center ph3 ph2-l">
    <h2 class="tc mb4">Comment bien commencer dans les crypto monnaies ?</h2>
    <section class="mb5">
      Quand on débute dans les crypto monnaies, on ne sait en général pas trop par où commencer, ni où aller chercher des informations.
      Cette page est là pour te guider, et répondre aux questions qui sont le plus souvent posées.
    </section>
    <h3 class="tc mb3">Je ne sais pas par où commencer</h3>
    <section class="mb5">
      On te conseille de regarder les vidéos sur le <a :href="youtubeUrl" target="blank" class="link b dim">Youtube</a> de La Baleine.
      Tu en trouveras une ci-dessous pour t'expliquer comment acheter du Bitcoin. <br />
      N'hésite pas à passer sur le <a :href="discordUrl" target="blank" class="link b dim">Discord</a> pour venir partager avec nous.
      <div class="w-100 w-50-l mw-100 center mt4">
        <div class="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/tn4-wClvsuY" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </section>
    <h3 class="tc mb3">Sur quelle monnaie investir ?</h3>
    <section class="mb5">
      Se renseigner sur le projet est probablement le point le plus important. <br />
      Il faut absolument éviter d'investir dans une monnaie parce que quelqu'un t'a dit qu'elle est bien. Il faut te renseigner par toi même. <br />
      Si tu te demandes où trouver ces informations, on te conseille de lire
      <a href="http://www.bitcoincours.com/p/conseils-investir-crypto-monnaie.html" target="blank" class="link b dim">
        ces 10 conseils sur l'investissement dans les crypto monnaies
      </a>.
    </section>
    <h3 class="tc mb3">Où obtenir des informations sur les monnaies ?</h3>
    <section class="mb4">
      On te conseille d'aller faire un tour dans la section <a href="/ressources" class="link b dim">ressources et liens utiles</a>
      du site. Tu y trouveras un ensemble de liens qui te permettront de faire ta veille d'informations.
    </section>
  </article>
</template>

<script>
import config from '../project.config.js';

export default {
  data() {
    return {
      youtubeUrl: config.youtubeUrl,
      discordUrl: config.discordUrl,
    }
  },
  head () {
    return {
      title: `${config.siteName} - Bien commencer dans les crypto monnaies - ${config.headline}`,
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Comment bien commencer dans les crypto monnaies ? Les informations indispensables à connaitre avant de se lancer dans l\'aventure.',
      }]
    }
  },
}
</script>
