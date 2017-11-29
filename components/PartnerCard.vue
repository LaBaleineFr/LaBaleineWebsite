<template>
  <article
    class="w4 h4 mb3 bg-white relative cover bg-center"
    v-bind:style="{backgroundImage: `url(${partner.image})`}"
    :title="partner.name"
  >
    <a :href="partner.url" target="_blank" class="db w-100 h-100 link hide-child">
      <div class="f7 white w-100 h-100 pa2 bg-blue absolute top-0 left-0 child">
        <div class="f5 mb3 tc">{{partner.name}}</div>
        {{partner.description}}
      </div>
    </a>
  </article>
</template>

<script>
export default {
  props: {
    'partner': {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
a h3 {
  text-align: center;
  line-height: 8rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
