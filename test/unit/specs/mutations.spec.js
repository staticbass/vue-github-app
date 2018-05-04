import mutations from '@/store/mutations';

describe('store.mutations', () => {
  function getState() {
    return {
      ui: {
        githubUserName: 'test name',
      },
    };
  }

  it('should change github username', () => {
    const state = getState();
    const username = 'new name';

    mutations.CHANGE_GITHUB_USERNAME(state, { username });

    expect(state.ui.githubUserName).to.equal(username);
  });
});
