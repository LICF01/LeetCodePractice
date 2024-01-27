import { describe, it, expect } from "vitest";
import findWordsContaining from "../../src/string/2942-find-words-containing-character";

describe("1108 - Defainging an IP address", () => {
  const testCases = [
    {
      input: {
        words: ["leet", "code"],
        x: "e",
      },
      expected: [0, 1],
    },
    {
      input: {
        words: ["abc", "bcd", "aaaa", "cbc"],
        x: "a",
      },
      expected: [0, 2],
    },
    {
      input: {
        words: ["abc", "bcd", "aaaa", "cbc"],
        x: "z",
      },
      expected: [],
    },
  ];
  testCases.forEach(({ input: { words, x }, expected }) => {
    it(`should returns the indices of ${x} in ${words}`, () => {
      expect(findWordsContaining(words, x)).toStrictEqual(expected);
    });
  });
});
