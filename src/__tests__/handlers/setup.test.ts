let initialValues = ["elephant", "tiger", "zebra", "bear"];
let animals = initialValues;

beforeEach(() => {
  animals = [...initialValues];
});
function addAnimal(animal: string) {
  animals.push(animal);
  return animals;
}

describe("animals array", () => {
  it("should add animals to the array", () => {
    expect(addAnimal("lion")).toContain("lion");
  });

  it(`animals array should have length ${animals.length}`, () => {
    expect(animals.length).toBe(4);
  });
});
