# egg-unittest-extend

<!--
Description here.
-->

unittest extension for egg.js, based on [ctimmerm/axios-mock-adapter](https://github.com/ctimmerm/axios-mock-adapter) and [aexmachina/factory-girl](https://github.com/aexmachina/factory-girl/blob/master/src/adapters/DefaultAdapter.js)

## Install

```bash
$ npm i egg-unittest-extend --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.eggUnittestExtend = {
  enable: true,
  package: 'egg-unittest-extend',
};
```

## Example

<!-- example here -->

### factory-girl
Read [aexmachina/factory-girl](https://github.com/aexmachina/factory-girl/blob/master/src/adapters/DefaultAdapter.js) for more details.
```js
// {app_root}/test/mock/factory/xxx.js
'use strict';

module.exports = app => {
  const { factory } = app;
  factory.define('User', app.model.User, {
    username: factory.chance('name'),
    age: factory.chance('age'),
  });
};

// {app_root}/test/app/service/xxx.test.js
'use strict';

const { app } = require('egg-mock/bootstrap');

let user
before(async () => {
  await app.ready();
  user = app.factory.build('User');
});

```

### mock-axios-adapter
Read  [ctimmerm/axios-mock-adapter](https://github.com/ctimmerm/axios-mock-adapter) for more details.
```js
// {app_root}/test/mock/axios/xxx.js
'use strict';

module.exports = app => {
  const { mockAxios } = app;
  mockAxios.onGet('https://test.mock.axios/')
    .reply(200, 'load mockAxios successfully');
};

// {app_root}/test/app/service/xxx.test.js
'use strict';

const { app, assert } = require('egg-mock/bootstrap');
const axios = require('axios');

describe('test/app/service/xxx.test.js', () => {
  it('should get mock response by axios', async () => {
    const res = await axios.get('https://test.mock.axios/');
    assert(res.data === 'load mockAxios successfully');
  });
});
```

## Questions & Suggestions

Please open an issue [here](https://github.com/william0911/egg-unittest-extend/issues).

## License

[MIT](LICENSE)
