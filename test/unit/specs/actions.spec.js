import actions from '@/store/actions';
import sinon from 'sinon';

describe('store.actions', () => {
  const commit = sinon.spy();
  const store = {
    commit,
  };

  it('should commit new username', () => {
    const username = 'test user name';
    const commitType = 'CHANGE_GITHUB_USERNAME';
    const commitData = { username };
    actions.changeGithubUserName(store, { username });

    expect(commit.calledWith(commitType, commitData)).to.equal(true);
  });
});
