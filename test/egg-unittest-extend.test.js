'use strict';

const mock = require('egg-mock');
const assert = require('power-assert');
const axios = require('axios');

describe('test/egg-unittest-extend.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/egg-unittest-extend-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, eggUnittestExtend')
      .expect(200);
  });

  it('should has app.factory', () => {
    assert(app.factory);
  });

  it('should has app.mockAxios', () => {
    assert(app.mockAxios);
  });

  it('should get mock response by axios', async () => {
    const res = await axios.get('https://test.mock.axios/');
    assert(res.data === 'load mockAxios successfully');
  });

  it('should get mock model by factory', async () => {
    const user = await app.factory.build('User');
    assert(user.username);
    assert(user.age);
  });
});
