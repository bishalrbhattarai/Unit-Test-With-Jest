test("1 + 1 should be 2 (Two)", () => {
  expect(1 + 1).toBe(2);
});

test("returns object with name and age", () => {
  const obj = {
    name: "Bishal",
    age: 25,
  };
  expect(obj).toMatchObject({
    name: "Bishal",
    age: 25,
  });

  expect(obj).toEqual({
    name: expect.any(String),
    age: expect.any(Number),
  });
});

test("working with array", () => {
  const names = ["bishal", "bijay", "hari"];

  expect(names).toMatch(expect.any(String));
});
