<template>
  <footer class="pv4 ph3 ph5-m ph6-l bg-black white">
    <div class="flex flex-wrap justify-around mw7 center">
      <div class="f3 mb3 mb0-ns">{{label}}</div>
      <div class="tc mb3 mb0-ns">
        <div class="f5 mb2">Contact</div>
        <div class="f7 white-70">{{email}}</div>
      </div>
      <div class="tc">
        <div class="f5 mb2">Soutenir (btc)</div>
        <div class="f7 white-70">17qGFLZV1tCHaTU8G7gH2zht7y9cxYHWJE</div>
      </div>
    </div>
  </footer>
</template>

<script>
import config from '../config/project.js';

export default {
  data() {
    return {
      label:`${config.siteName} © ${new Date().getFullYear()}`,
      email:config.email,
    }
  },
}
</script>
