const { resolveAsync, rejectAsync } = require('.');

describe('testing async functions', () => {
  test('can test against resolved promise', async () => {
    await expect(resolveAsync()).resolves.toMatchSnapshot();
  });

  test('can test against rejected promise', async () => {
    await expect(rejectAsync()).rejects.toThrowErrorMatchingSnapshot();
  });
});
