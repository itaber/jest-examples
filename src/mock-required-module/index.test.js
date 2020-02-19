jest.mock('./lib/async-mod'); // uses the file in `./lib/__mocks__/async-mod

const { asyncFn } = require('./lib/async-mod');
const { functionToBeTested } = require('.');

describe('mock required module', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('global mocked resolves', async () => {
    await expect(functionToBeTested()).resolves.toEqual(8);
  });

  test('using a custom resolve function', async () => {
    asyncFn.mockResolvedValueOnce(5);
    await expect(functionToBeTested()).resolves.toEqual(10);
  });

  test('using a custom resolve function', async () => {
    asyncFn.mockResolvedValueOnce(7);
    await expect(functionToBeTested()).resolves.toEqual(14);
  });
});
