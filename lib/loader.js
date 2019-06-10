'use strict';

const loadMockAxios = require('./mock-axios');
const loadFactory = require('./factory');

const loadMockTools = app => {
  loadMockAxios(app);
  loadFactory(app);
};

module.exports = loadMockTools;
