<template>
  <article class="w-100 h4 mb3 bg-white relative" :title="name">
    <a :href="url" target="blank" class="db ph2 w-100 h-100 link hide-child">
      <h3 class="f4 black">{{name}}</h3>
      <div class="f5 white w-100 h-100 pa3 bg-blue absolute top-0 left-0 child">
        {{description}}
      </div>
    </a>
  </article>
</template>

<script>
export default {
  name: 'RessourceCard',
  props: {
    'name': {
      type: String,
      required: true,
    },
    'description': {
      type: String,
      required: true,
    },
    'url': {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
a h3{
  text-align: center;
  line-height: 8rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
@media screen and (min-width: 480px) {
  article {
    width: calc((100%/3) - 10px);
  }
  article:nth-child(3n) {
    margin-right: 0;
  }
  article:nth-child(3n+1) {
    margin-right: 15px;
  }
  article:nth-child(3n+2) {
    margin-right: 15px;
  }
}
</style>
