<template>
  <article class="mw5 mb3 mh2 br3 grow">
    <a :href="url" target="blank" class="db pa2 tc link">
      <img :src="image" width="100px" height="100px" class="br-100 dib ba b--black-05 pa2" :title="imgTitle" :alt="imgTitle">
    </a>
  </article>
</template>

<script>
export default {
  name: 'SocialCard',
  props: {
    'title': {
      type: String,
      required: true,
    },
    'url': {
      type: String,
      required: true,
    },
    'image': {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      imgTitle: `${this.title} La Baleine`,
    }
  },
}
</script>
