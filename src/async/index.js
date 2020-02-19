
const resolveAsync = () => Promise.resolve('success');

const rejectAsync = () => Promise.reject(new Error('something went wrong'));

module.exports = {
  resolveAsync,
  rejectAsync,
};