<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-5">{{cutString(title, 50)}}</p>
          <p class="subtitle is-7">
            {{subtitle}}
            <span v-if="tag" class="tag">{{tag}}</span>
          </p>
        </div>
      </div>
      <div class="content is-small">
        {{cutString(content, 100)}}
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import Tag from '../common/Tag';

export default {
  name: 'Card',
  props: {
    title: String,
    subtitle: String,
    tag: String,
    content: String,
  },
  methods: {
    cutString(content, length) {
      if (content.length > length) {
        return `${content.substring(0, length)} ...`;
      }
      return content;
    },
  },
  components: {
    tag: Tag,
  },
};
</script>

<style scoped>
  .card .card-content {
    padding: 10px;
  }
</style>
