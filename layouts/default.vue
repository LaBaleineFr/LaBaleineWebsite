<template>
  <div>
    <app-menu />
    <nuxt/>
    <app-footer/>
  </div>
</template>

<script>
import AppFooter from '~components/Footer.vue'
import AppMenu from '~components/Menu.vue'

export default {
  components: {
    AppFooter,
    AppMenu,
  }
}
</script>
