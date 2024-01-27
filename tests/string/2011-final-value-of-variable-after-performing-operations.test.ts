import { describe, it, expect } from "vitest";
import finalValueAfterOperations from "../../src/string/2011-final-value-of-variable-after-performing-operations";

describe("1108 - Defainging an IP address", () => {
  const testCases = [
    { input: ["--X", "X++", "X++"], expected: 1 },
    { input: ["++X", "++X", "X++"], expected: 3 },
    { input: ["X++", "++X", "--X", "X--"], expected: 0 },
  ];
  testCases.forEach(({ input, expected }) => {
    it(`should return the final value of ${input} after all operations`, () => {
      expect(finalValueAfterOperations(input)).toStrictEqual(expected);
    });
  });
});
