<template>
  <article class="mw8 mb5 center ph4 ph2-l">
    <h2 class="tc mb4">Comment bien commencer ?</h2>
    <h3 class="tc mb3">Je ne sais pas par où commencer</h3>
    <div class="mb5">
      On te conseille de regarder les vidéos sur le <a :href="youtubeUrl" target="blank" class="link b">Youtube</a> de La Baleine.
      Tu en trouveras une ci-dessous pour t'expliquer comment acheter du Bitcoin. <br />
      N'hésite pas à passer sur le <a :href="discordUrl" target="blank" class="link b">Discord</a> pour venir partager avec nous.
      <div class="w-100 w-60-l mw-100 center mt4">
        <div class="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/tn4-wClvsuY" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </div>
    <h3 class="tc mb3">Sur quelle monnaie investir ?</h3>
    <div class="mb4">
      Se renseigner sur le projet est probablement le point le plus important. <br />
      Il faut absolument éviter d'investir dans une monnaie parce que quelqu'un t'a dit qu'elle est bien. Il faut te renseigner par toi même. <br />
      Si tu te demandes où trouver ces informations, on te conseille de lire
      <a href="http://www.bitcoincours.com/p/conseils-investir-crypto-monnaie.html" target="blank" class="link b">
        ces 10 conseils sur l'investissement dans les crypto monnaies
      </a>.
    </div>
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
}
</script>
