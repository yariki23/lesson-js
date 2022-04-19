import { counter1 } from "./index";

it("should get only even numbers from array", () => {
  const result = counter1();
  expect(result).toEqual(2);
});
