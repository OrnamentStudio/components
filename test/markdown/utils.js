const { assert } = require('chai');

const {
  isLocalLink,
} = require('../../src/markdown/utils');


describe('markdown/utils', () => {
  it('isLocalLink', () => {
    const isTrue = [
      '/route',
      '/child/route',
      '/child/route?a=2',
    ];

    const isFalse = [
      'https://www.google.com',
      'http://www.google.com',
    ];

    isTrue.forEach((value) => assert.isTrue(isLocalLink(value), `checked as local link: ${value}`));
    isFalse.forEach((value) => assert.isFalse(isLocalLink(value), `checked as external link: ${value}`));
  });
});
