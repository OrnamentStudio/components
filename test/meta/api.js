const { assert } = require('chai');

const createApi = require('../../src/meta/api').default;


describe('meta/api', () => {
  describe('addProps', () => {
    it('without callback', () => {
      const list = { current: [] };
      const api = createApi(list);

      api.addProps(1);
      const removeSecond = api.addProps(2);
      api.addProps(3);

      assert.deepEqual(list.current, [1, 2, 3], 'add items to list');
      removeSecond();
      assert.deepEqual(list.current, [1, 3], 'remove item from list');
    });

    it('with callback', () => {
      const list = { current: [] };
      let callbackCount = 0;
      const callback = () => { callbackCount += 1; };

      const api = createApi(list, callback);

      const remove = api.addProps(1);
      assert.equal(callbackCount, 1, 'callback is called after insertion');
      remove();
      assert.equal(callbackCount, 2, 'callback is called after deletion');
    });
  });

  describe('getProps', () => {
    it('merge list', () => {
      const list = {
        current: [
          { a: 1, b: 2 },
          { b: 3 },
        ],
      };

      const api = createApi(list);
      assert.deepEqual(api.getProps(), { a: 1, b: 3 }, 'last item override first');
    });

    it('apply title template', () => {
      const list = {
        current: [
          { title: 'here', titleTemplate: '=> {title} <=' },
          { title: 'look' },
        ],
      };

      const api = createApi(list);

      assert.equal(api.getProps().title, '=> look <=', 'apply title');
    });
  });
});
