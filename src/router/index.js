import Vue from 'vue';
import Router from 'vue-router';
import UserPage from '../pages/UserPage';
import RepoPage from '../pages/RepoPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UserPage',
      component: UserPage,
    },
    {
      path: '/repo/:id',
      name: 'RepoPage',
      component: RepoPage,
    },
  ],
});
