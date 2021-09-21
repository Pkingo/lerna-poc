import { isValidEmail } from "../src/isValidEmail";

describe("Is valid email", () => {
  it("returns true for valid email", () => {
    const testEmail = "test@test.com";
    expect(isValidEmail(testEmail)).toBeTruthy();
  });
  it("returns false for valid email", () => {
    const testEmail = ">asdas";
    expect(isValidEmail(testEmail)).toBeFalsy();
  });
});
