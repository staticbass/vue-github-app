import getters from '@/store/getters';

describe('store.getters', () => {
  const state = {
    ui: {
      githubUserName: 'test name',
    },
  };

  it('should return correct github username', () => {
    const actual = getters.githubUserName(state);
    const expected = 'test name';

    expect(actual).to.equal(expected);
  });
});
