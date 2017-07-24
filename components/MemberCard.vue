<template>
  <article class="flex w-100 w-70-m center-m w-40-l pa2 mb4 overflow-hidden bg-white br3 ba b--black-10">
    <img :src="member.image" class="br-100 h4 w4 dib ba b--black-05 mr3 self-center" :title="member.name">
    <div class="w-100 flex flex-column justify-center pa2">
      <div class="f4 f3-l b mb2">{{member.name}}</div>
      <div class="f5 gray mb3">{{member.description}}</div>
      <a class="link near-black dim" :href="member.github" target="blank" :title="githubLinkTitle">
        <img src="github.svg" width="25px" height="25px" alt="github">
      </a>
    </div>
  </article>
</template>

<script>
export default {
  name: 'MemberCard',
  props: {
    'member': {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      githubLinkTitle:`github ${this.member.name}`,
    }
  },
}
</script>
