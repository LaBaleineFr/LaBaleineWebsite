<template>
  <article>
    <h2 class="tc mb4">F.A.Q</h2>
    <h3 class="tc mb3">Je ne sais pas par où commencer</h3>
    <div class="mb5">
      On te conseille de regarder les vidéos sur le <a :href="youtubeUrl" target="blank" class="link b">Youtube</a> de La Baleine.
      Tu en trouveras deux ci-dessous.
      Une pour présenter le projet La Baleine, une autre pour t'expliquer comment acheter du Bitcoin. <br />
      N'hésite pas à passer sur le <a :href="discordUrl" target="blank" class="link b">discord</a> pour venir partager avec nous.
      <div class="w-100 w-60-l mw-100 center mt4">
        <div class="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/STwOr0nYz1I" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
      <div class="w-100 w-60-l mw-100 center mt4">
        <div class="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/tn4-wClvsuY" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </div>
    <h3 class="tc mb3">Comment savoir si ça vaut le coup d'investir dans un monnaie ?</h3>
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
import config from '../config/project.js';

export default {
  data() {
    return {
      youtubeUrl: config.youtubeUrl,
      discordUrl: config.discordUrl,
    }
  },
}
</script>

<style scoped>
/* Allows youtube video to be responsive */
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
}
.video-container iframe,
.video-container object,
.video-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
