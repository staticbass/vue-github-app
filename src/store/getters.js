export default {
  githubUserName: state => state.ui.githubUserName,
  error: state => state.ui.error,
  globalLoading: state => state.ui.globalLoading,

  githubUserInfo: state => state.domain.githubUserInfo,
  githubUserRepos: state => state.domain.githubUserRepos,
  githubUserRepo: state => id =>
    state.domain.githubUserRepos.find(repo => repo.id === Number(id)),
  githubRepoPulls: state => state.domain.githubRepoPulls,
  githubRepoIssues: state => state.domain.githubRepoIssues,
};
