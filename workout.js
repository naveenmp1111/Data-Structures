const util = require('util');

async function asyncFunction() {
  return 'Hello, World!';
}

const callbackFunction = util.callbackify(asyncFunction);

callbackFunction((err, result) => {
  if (err) throw err;
  console.log(result);
});
