<template>
  <div class="repo-issues">
    <h4 class="title is-4">Issues</h4>
    <p v-if="issues.length === 0">No issues available</p>
    <card
      v-for="issue in issues"
      v-bind:key="issue.id"
      v-bind:title="issue.title"
      v-bind:subtitle="issue.user.login"
      v-bind:tag="issue.state"
      v-bind:content="issue.body"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Card from '../common/Card';

export default {
  name: 'RepoIssues',
  computed: {
    ...mapGetters({
      issues: 'githubRepoIssues',
    }),
  },
  components: {
    card: Card,
  },
};
</script>

<style scoped>
  .repo-issues {
    flex-basis: 50%;
    flex-grow: 1;
    margin: 0 5px;
  }
</style>
