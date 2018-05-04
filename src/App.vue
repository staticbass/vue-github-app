<template>
  <div id="app">

    <div v-if="error" class="notification is-danger">
      <h4 class="title is-4">Oops! Something went wrong</h4>
      <h6 class="subtitle is-6">{{error.message}}</h6>
    </div>

    <div v-if="globalLoading" class="global-loader">
      <div class="loader"></div>
    </div>

    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapGetters([
      'error',
      'globalLoading',
    ]),
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.notification {
  padding: 8px;
  border-radius: 0;
}
.global-loader {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(195, 195, 195, 0.2);
  z-index: 1;
}
.global-loader .loader {
  width: 4em;
  height: 4em;
}
</style>
