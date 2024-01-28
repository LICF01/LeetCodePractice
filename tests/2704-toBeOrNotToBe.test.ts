import { describe, it, expect as viExpect } from "vitest";
import expect from "../src/2704-toBeOrNotToBe";

describe("2704 - To Be Or Not To Be", () => {
  const value = 5;
  const notValue = null;
  it("should return true if the two values are equal", () => {
    const result = expect(value).toBe(value);
    viExpect(result).toBe(true);
  });
  it("should throw an error if the two values are not equal", () => {
    const result = () => expect(value).toBe(notValue);
    viExpect(result).toThrowError("Not Equal");
  });
  it("should return true if the two values are not equal", () => {
    const result = expect(value).notToBe(notValue);
    viExpect(result).toBe(true);
  });
  it("should throw an error if the two values are equal", () => {
    const result = () => expect(value).notToBe(value);
    viExpect(result).toThrowError("Equal");
  });
});
