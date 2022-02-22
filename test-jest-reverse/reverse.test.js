import { reverseArray } from "./reverse";

it("should get not array", () => {
  const result = reverseArray(432);
  expect(result).toEqual(null);
});

it("should get array reverse", () => {
  const result = reverseArray([32, 23, 1, -23]);
  expect(result).toEqual([-23, 1, 23, 32]);
});

it("should get empty arr", () => {
  const result = reverseArray([]);
  expect(result).toEqual([]);
});
