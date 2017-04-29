<template>
  <footer class="pv4 ph3 ph5-m ph6-l bg-black">
    <div class="f6 db tc white">{{label}}</div>
  </footer>
</template>

<script>
import config from '../config/project.js';

export default {
  data() {
    return {
      label:`${config.siteName} © ${new Date().getFullYear()}`,
    }
  },
}
</script>
