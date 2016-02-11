var babel = require('babel-core');
var path = require('path');

babel.transformFile(
  path.join(__dirname, '..', 'index.js'),
  {},
  (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(result.code);
  }
);
