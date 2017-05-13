<template>
  <article class="mw5 mb3 mh2 bg-white br3 ba b--black-10 grow dim">
    <a :href="url" target="blank" class="db pa3 pa4-ns tc link">
      <img :src="image" width="128px" height="128px" class="br-100 h4 w4 dib ba b--black-05 pa2" :title="imgTitle" :alt="imgTitle">
      <h3 class="f3 mt3 mb2 black">{{title}}</h3>
    </a>
  </article>
</template>

<script>
export default {
  name: 'Card',
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
