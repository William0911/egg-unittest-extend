'use strict';

exports.factory = {
  adapter: class {
    build(Model, props) {
      return new Model(props);
    }

    async save(model) {
      console.info('instance is saved');
      return model;
    }

    async destroy(model) {
      console.info('instance is destroyed');
      return model;
    }

    get(model, attr) {
      console.info('attr is got');
      return model[attr];
    }

    set(props, model) {
      console.info('props of instance is set');
      Object.assign(model, props);
      return model;
    }
  },
};

exports.keys = '123456';
