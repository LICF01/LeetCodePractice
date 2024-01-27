import { describe, it, expect } from "vitest";
import interpret from "../../src/string/1678-goal-parser-interpretation";

describe("1678. Goal Parser Interpretation", () => {
  const testCases = [
    { input: "G()(al)", expected: "Goal" },
    { input: "G()()()()(al)", expected: "Gooooal" },
    { input: "(al)G(al)()()G", expected: "alGalooG" },
  ];
  testCases.forEach(({ input, expected }) => {
    it(`should return the Goal Parser's interpretation of ${input}`, () => {
      expect(interpret(input)).toBe(expected);
    });
  });
});
