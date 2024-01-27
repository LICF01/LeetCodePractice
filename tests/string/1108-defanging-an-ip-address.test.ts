import { describe, it, expect } from "vitest";
import { defangIPaddr } from "../../src/string/1108-defanging-an-ip-address";

describe("1108 - Defainging an IP address", () => {
  const testCases = [
    { input: "1.1.1.1", expected: "1[.]1[.]1[.]1" },
    { input: "255.100.50.0", expected: "255[.]100[.]50[.]0" },
    { input: "192.168.1.1", expected: "192[.]168[.]1[.]1" },
  ];
  testCases.forEach(({ input, expected }) => {
    it(`should defang the IP address ${input}`, () => {
      expect(defangIPaddr(input)).toBe(expected);
    });
  });
});
