'use strict';

class User {
  constructor(props) {
    const { username, age } = props;
    this.username = username;
    this.age = age;
  }
}

module.exports = app => {
  const { factory } = app;
  factory.define('User', User, {
    username: factory.chance('name'),
    age: factory.chance('age'),
  });
};
