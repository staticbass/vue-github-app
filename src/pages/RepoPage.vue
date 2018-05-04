<template>
  <section class="section">
    <h1 class="title is-3">
      {{ repo.name }}
      <span v-show="repo.fork" class="tag">Forked</span>
    </h1>
    <hr />
    <div class="field is-grouped is-grouped-multiline">
      <tag title="Stars" type="warning" v-bind:text="String(repo.stargazers_count)" />
      <tag title="Forks" type="success" v-bind:text="String(repo.forks_count)" />
      <tag title="Watchers" type="primary" v-bind:text="String(repo.watchers_count)" />
    </div>
    <div class="content">
      {{repo.description}}

      <div class="repo-info">
        <repo-issues />
        <repo-pulls />
      </div>
    </div>
  </section>
</template>

<script>
import Tag from '../common/Tag';
import RepoIssues from '../components/RepoIssues';
import RepoPulls from '../components/RepoPulls';

export default {
  name: 'RepoPage',
  mounted() {
    const repoId = this.$route.params.id;
    this.setRepoPulls(repoId);
    this.setRepoIssues(repoId);
  },
  computed: {
    repo() {
      return this.$store.getters.githubUserRepo(this.$route.params.id);
    },
  },
  methods: {
    setRepoPulls(repoId) {
      this.$store.dispatch('setGithubRepoPulls', repoId);
    },
    setRepoIssues(repoId) {
      this.$store.dispatch('setGithubRepoIssues', repoId);
    },
  },
  components: {
    'repo-pulls': RepoPulls,
    'repo-issues': RepoIssues,
    tag: Tag,
  },
};
</script>

<style scoped>
  .repo-info {
    display: flex;
    margin: 2em 0;
  }
</style>
