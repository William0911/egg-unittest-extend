'use strict';

const mock = require('egg-mock');
const assert = require('power-assert');
const axios = require('axios');

describe('test/keepwork-test-extend.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/keepwork-unittest-extend-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, keepworkUnittestExtend')
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
});
