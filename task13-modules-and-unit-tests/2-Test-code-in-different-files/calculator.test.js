import { calc } from "./calculator";

it("should get not string", () => {
  const result = calc(432);
  expect(result).toEqual(null);
});

it("should get plus", () => {
  const result = calc("2 + 2");
  expect(result).toEqual("2 + 2 = 4");
});

it("should get minus", () => {
  const result = calc("2 - 2");
  expect(result).toEqual("2 - 2 = 0");
});

it("should get multiply", () => {
  const result = calc("2 * 2");
  expect(result).toEqual("2 * 2 = 4");
});

it("should get division", () => {
  const result = calc("2 / 2");
  expect(result).toEqual("2 / 2 = 1");
});
