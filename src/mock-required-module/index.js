const { asyncFn } = require('./lib/async-mod');

const functionToBeTested = async () => {
  const resp = await asyncFn();
  return resp * 2;
};

module.exports = {
  functionToBeTested,
};
