var babel = require('babel-core');
var path = require('path');

process.chdir(__dirname); // this is the only difference

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
