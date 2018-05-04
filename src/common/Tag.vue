<template>
  <div class="control">
    <div class="tags has-addons">
      <span class="tag title-tag is-dark">{{title}}</span>
      <span v-bind:class="'tag text-tag is-' + type">{{text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    type: String,
    title: String,
    text: String,
  },
};
</script>
