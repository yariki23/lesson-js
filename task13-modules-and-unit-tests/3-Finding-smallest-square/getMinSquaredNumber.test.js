import { getMinSquaredNumber } from "./getMinSquaredNumber";

it("should get empty array", () => {
  const result = getMinSquaredNumber([]);
  expect(result).toEqual(null);
});

it("should get odd number", () => {
  const result = getMinSquaredNumber("string");
  expect(result).toEqual(null);
});

it("should get sum of numbers", () => {
  const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
  expect(result).toEqual(4);
});
