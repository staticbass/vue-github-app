<template>
  <div class="repo-pulls">
    <h4 class="title is-4">Pull Requests</h4>
    <p v-if="pulls.length === 0">No pull requests available</p>
    <card
      v-for="pull in pulls"
      v-bind:key="pull.id"
      v-bind:title="pull.title"
      v-bind:subtitle="pull.user.login"
      v-bind:tag="pull.state"
      v-bind:content="pull.body"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Card from '../common/Card';

export default {
  name: 'RepoPulls',
  computed: {
    ...mapGetters({
      pulls: 'githubRepoPulls',
    }),
  },
  components: {
    card: Card,
  },
};
</script>

<style scoped>
  .repo-pulls {
    flex-basis: 50%;
    flex-grow: 1;
    margin: 0 5px;
  }
</style>
