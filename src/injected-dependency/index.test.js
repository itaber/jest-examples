const { theFunctionToBeTested } = require('.');

const mockedFn = jest.fn().mockReturnValue(10);

describe('dependency injection', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('the default mock function is used', async () => {
    const actual = theFunctionToBeTested(mockedFn);
    expect(actual).toEqual(20);
  });

  test('a custom mock is used', async () => {
    mockedFn.mockReturnValueOnce(5);
    const actual = theFunctionToBeTested(mockedFn);
    expect(actual).toEqual(10);
  });

});
