const staircaseSteps = require('../solutions/staircaseSteps');

describe('staircaseSteps function', () => {
  const testCases = [
    {
      input: { steps: 4, paces: [1, 2] },
      expectation: [
        [1, 1, 1, 1],
        [1, 1, 2],
        [1, 2, 1],
        [2, 1, 1],
        [2, 2],
      ],
    },
  ];

  testCases.forEach((testCase) => {
    test(`should sort the element ${testCase.input}`, () => {
      const output = staircaseSteps(testCase.input);
      expect(output).toEqual(testCase.expectation);
    });
  });
});
