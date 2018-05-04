<template>
  <form v-on:submit.prevent="changeGithubUserName">
    <div class="field has-addons">
      <div class="control">
        <input
          autofocus
          placeholder="Enter a name ..."
          class="input is-medium"
          name="username"
          :value="username"
          type="text"
        />
      </div>
      <div class="control">
        <button class="button is-primary is-medium" type="submit">Search</button>
      </div>
    </div>
  </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'UserInput',
  computed: {
    ...mapGetters({
      username: 'githubUserName',
    }),
  },
  watch: {
    username(newValue) {
      if (newValue) {
        this.setGithubUserInfo({ username: newValue });
      }
    },
  },
  methods: {
    changeGithubUserName(event) {
      const { value } = event.target.elements.username;
      this.$store.dispatch('changeGithubUserName', { username: value });
    },
    ...mapActions(['setGithubUserInfo']),
  },
};
</script>
