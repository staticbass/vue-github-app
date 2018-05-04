<template>
  <div v-show="showUser()" class="box user-info-component">
    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img v-bind:src="user.avatar_url" v-bind:alt="user.name">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <h3 class="title is-3">{{user.login}}</h3>
          <h4 class="subtitle is-4">{{user.email}}</h4>
          <small>{{user.location}} | Followers: {{user.followers || 0}}</small>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'UserInfo',
  methods: {
    showUser() {
      return Object.keys(this.user).length > 0;
    },
    ...mapActions([
      'setGithubUserInfo',
    ]),
  },
  computed: {
    ...mapGetters({
      user: 'githubUserInfo',
    }),
  },
};
</script>

<style scoped>
  .user-info-component {
    margin: 2em 0;
  }
</style>
