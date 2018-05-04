import Vue from 'vue';
import Tag from '@/common/Tag';

describe('Tag.vue', () => {
  const propsData = {
    type: 'danger',
    title: 'Test title',
    text: 'Test text',
  };

  function setupComponent(Component, props) {
    const Constructor = Vue.extend(Component);
    const vm = new Constructor({ propsData: props }).$mount();
    return vm.$el;
  }

  it('should render correct type', () => {
    const component = setupComponent(Tag, propsData);
    const actual = component.querySelector('span.text-tag').className;
    const expected = 'tag text-tag is-danger';

    expect(actual).to.equal(expected);
  });

  it('should render correct title', () => {
    const component = setupComponent(Tag, propsData);
    const actual = component.querySelector('span.title-tag').textContent;
    const expected = 'Test title';

    expect(actual).to.equal(expected);
  });

  it('should render correct text', () => {
    const component = setupComponent(Tag, propsData);
    const actual = component.querySelector('span.text-tag').textContent;
    const expected = 'Test text';

    expect(actual).to.equal(expected);
  });
});
