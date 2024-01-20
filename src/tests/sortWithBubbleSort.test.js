const sortWithBubbleSort = require('../solutions/sortWithBubbleSort');

describe('sortWithBubbleSort function', () => {
  const testCases = [
    { input: null, expectation: null },
    { input: [], expectation: [] },
    { input: [1], expectation: [1] },
    { input: [1, 2], expectation: [1, 2] },
    { input: [1, 2, 3, 4], expectation: [1, 2, 3, 4] },
    { input: [4, 3, 2, 1], expectation: [1, 2, 3, 4] },
    { input: [2, 6, 1, 8], expectation: [1, 2, 6, 8] },
  ];

  testCases.forEach((testCase) => {
    test(`should sort the element ${testCase.input}`, () => {
      const output = sortWithBubbleSort(testCase.input);
      expect(output).toEqual(testCase.expectation);
    });
  });
});
