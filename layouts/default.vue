<template>
  <div>
    <app-menu />
    <nuxt/>
    <app-footer/>
  </div>
</template>

<script>
import AppMenu from '~/components/Menu'
import AppFooter from '~/components/Footer'

export default {
  components: {
    AppMenu,
    AppFooter,
  }
}
</script>
