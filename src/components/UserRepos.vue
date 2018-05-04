<template>
  <div v-if="repos.length > 0" class="container">
    <h3 class="title is-3">Repos</h3>
    <RepoInfo v-for="repo in repos" v-bind:repo="repo" v-bind:key="repo.id" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import RepoInfo from './RepoInfo';

export default {
  name: 'UserRepos',
  components: { RepoInfo },
  watch: {
    userInfo(newValue) {
      if (newValue) {
        this.setGithubUserRepos();
      }
    },
  },
  methods: {
    ...mapActions(['setGithubUserRepos']),
  },
  computed: {
    ...mapGetters({
      repos: 'githubUserRepos',
      userInfo: 'githubUserInfo',
    }),
  },
};
</script>
