'use strict';

const mock = require('egg-mock');

describe('test/test-extend.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/test-extend-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, testExtend')
      .expect(200);
  });
});
