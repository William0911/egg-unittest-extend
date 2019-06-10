'use strict';

module.exports = app => {
  const { mockAxios } = app;
  mockAxios.onGet('https://test.mock.axios/')
    .reply(200, 'load mockAxios successfully');
};
