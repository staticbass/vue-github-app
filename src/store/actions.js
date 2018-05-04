import github from '../api/github';

export default {
  changeGithubUserName: (store, { username }) => {
    store.commit('CHANGE_GITHUB_USERNAME', { username });
  },
  setGithubUserInfo: async (store, { username }) => {
    try {
      store.commit('SET_GLOBAL_LOADING', { loading: true });
      const { data } = await github.getUserInfo(username);
      store.commit('SET_GITHUB_USER_INFO', { githubUserInfo: data });
    } catch (error) {
      store.commit('SET_REQUEST_ERROR', { error });
    } finally {
      store.commit('SET_GLOBAL_LOADING', { loading: false });
    }
  },
  setGithubUserRepos: async (store) => {
    try {
      store.commit('SET_GLOBAL_LOADING', { loading: true });
      const { login } = store.getters.githubUserInfo;
      const { data } = await github.getUserRepos(login);
      store.commit('SET_GITHUB_USER_REPOS', { githubUserRepos: data });
    } catch (error) {
      store.commit('SET_REQUEST_ERROR', { error });
    } finally {
      store.commit('SET_GLOBAL_LOADING', { loading: false });
    }
  },
  setGithubRepoPulls: async (store, payload) => {
    try {
      store.commit('SET_GLOBAL_LOADING', { loading: true });
      const { login: username } = store.getters.githubUserInfo;
      const { name: reponame } = store.getters.githubUserRepo(payload);
      const { data } = await github.getRepoPulls({ username, reponame });
      store.commit('SET_GITHUB_REPO_PULLS', { githubRepoPulls: data });
    } catch (error) {
      store.commit('SET_REQUEST_ERROR', { error });
    } finally {
      store.commit('SET_GLOBAL_LOADING', { loading: false });
    }
  },
  setGithubRepoIssues: async (store, payload) => {
    try {
      store.commit('SET_GLOBAL_LOADING', { loading: true });
      const { login: username } = store.getters.githubUserInfo;
      const { name: reponame } = store.getters.githubUserRepo(payload);
      const { data } = await github.getRepoIssues({ username, reponame });
      store.commit('SET_GITHUB_REPO_ISSUES', { githubRepoIssues: data });
    } catch (error) {
      store.commit('SET_REQUEST_ERROR', { error });
    } finally {
      store.commit('SET_GLOBAL_LOADING', { loading: false });
    }
  },
};
