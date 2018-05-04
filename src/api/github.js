import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export default {
  getUserInfo: username => axios.get(`${BASE_URL}/users/${username}`),
  getUserRepos: username => axios.get(`${BASE_URL}/users/${username}/repos`),
  getRepoPulls: (({ username, reponame }) => axios.get(`${BASE_URL}/repos/${username}/${reponame}/pulls`)),
  getRepoIssues: (({ username, reponame }) => axios.get(`${BASE_URL}/repos/${username}/${reponame}/issues`)),
};
