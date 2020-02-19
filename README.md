# JEST Examples
a set of examples on how to use jest and mocking

https://jestjs.io/

## Basic Function

`/src/basic`

```javascript
test('addition', () => {
  const actual = add(1, 2);
  // https://jestjs.io/docs/en/expect
  expect(actual).toBe(3);
  expect(actual).not.toBe(4);
});
```


## Dependencies


### Injected

`/src/injected-dependency`

```javascript
test('the default mock function is used', async () => {
  const actual = theFunctionToBeTested(mockedFn);
  expect(actual).toEqual(20);
});
```

### Required

`/src/mocked-required-module`

```javascript
jest.mock('./the-library'); 

describe('the test block', () => {
  test('using a custom resolve function', async () => {
    asyncFn.mockResolvedValueOnce(5);
    await expect(functionToBeTested()).resolves.toEqual(10);
  });
})
```