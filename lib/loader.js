'use strict';

const loadMockAxios = require('./mock-axios');
const loadFactory = require('./factory');

const loadMockTools = app => {
  if (app.config.mock_axios.enabled) loadMockAxios(app);
  if (app.config.factory.enabled) loadFactory(app);
};

module.exports = loadMockTools;
