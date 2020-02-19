const { add, multiply } = require('.');

describe('math library', () => {

  // Basic tests
  describe('basic arithmatic', () => {
    test('addition', () => {
      const actual = add(1, 2);
      expect(actual).toBe(3);
    });

    test('multiple', () => {
      const actual = multiply(5, 2);
      expect(actual).toBe(10);
    });

    test.skip('do not run this test', async () => {
      expect(true).toEqual(false);
    });
  });
});
