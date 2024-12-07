import { fetchData } from "../../async";

describe("Async call", () => {
  it("fetch todo with id 1", async () => {
    const data = await fetchData(1);
    expect(data).toBeTruthy();
  });
});
