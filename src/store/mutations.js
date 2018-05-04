export default {
  CHANGE_GITHUB_USERNAME: (state, { username }) => {
    state.ui.githubUserName = username;
  },
  SET_GLOBAL_LOADING: ((state, { loading }) => {
    state.ui.globalLoading = loading;
  }),
  SET_REQUEST_ERROR: (state, { error }) => {
    state.ui.error = error;
  },
  SET_GITHUB_USER_INFO: (state, { githubUserInfo }) => {
    state.domain.githubUserInfo = githubUserInfo;
  },
  SET_GITHUB_USER_REPOS: (state, { githubUserRepos }) => {
    state.domain.githubUserRepos = githubUserRepos;
  },
  SET_GITHUB_REPO_PULLS: (state, { githubRepoPulls }) => {
    state.domain.githubRepoPulls = githubRepoPulls;
  },
  SET_GITHUB_REPO_ISSUES: (state, { githubRepoIssues }) => {
    state.domain.githubRepoIssues = githubRepoIssues;
  },
};
