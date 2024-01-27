import { describe, it, expect } from "vitest";
import { defangIPaddr } from "../../src/string/1108-defanging-an-ip-address";

describe("defangIP", () => {
  it('should replace all periods in an IP address with "[.]"', () => {
    const input: string = "1.1.1.1";
    const expectedOutput: string = "1[.]1[.]1[.]1";

    const result: string = defangIPaddr(input);
    expect(result).toBe(expectedOutput);
  });
});
