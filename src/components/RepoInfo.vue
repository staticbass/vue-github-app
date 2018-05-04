<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">
            <router-link v-bind:to="'/repo/' + repo.id">{{repo.name}}</router-link>
            <span v-show="repo.fork" class="tag">Forked</span>
          </p>
          <div class="field is-grouped is-grouped-multiline">
            <tag title="Stars" type="warning" v-bind:text="String(repo.stargazers_count)" />
            <tag title="Forks" type="success" v-bind:text="String(repo.forks_count)" />
            <tag title="Watchers" type="primary" v-bind:text="String(repo.watchers_count)" />
          </div>
        </div>
      </div>
      <div class="content">
        {{repo.description}}
      </div>
    </div>
  </div>
</template>

<script>
import Tag from '../common/Tag';

export default {
  name: 'RepoInfo',
  props: {
    repo: {
      id: String,
      name: String,
      fork: Boolean,
      stargazers_count: Number,
      forks_count: Number,
      watchers_count: Number,
      description: String,
    },
  },
  components: {
    tag: Tag,
  },
};
</script>
