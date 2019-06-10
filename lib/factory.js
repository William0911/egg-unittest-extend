'use strict';

const path = require('path');
const FactoryGirl = require('factory-girl');

const loadFactory = app => {
  const defaultConfig = {
    baseDir: path.join('mock', 'factory'),
    enabled: true,
    adapter: undefined,
    cleanUp: true,
  };
  const config = Object.assign({}, defaultConfig, app.config.fatoryGirl);
  const { enabled, adapter, baseDir, cleanUp } = config;
  if (enabled === false) return;

  const factory = FactoryGirl.factory;
  if (adapter) factory.setAdapter(new adapter());
  app.factory = factory;

  const directory = path.join(app.config.baseDir, 'test', baseDir);
  app.loader.loadToApp(directory, Symbol('_factory'));
  if (cleanUp === true) after(async () => await factory.cleanUp());
};

module.exports = loadFactory;
