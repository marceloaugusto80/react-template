import { ExampleLogic } from "../services/ExampleLogic";
import { describe, it, expect } from "vitest";

describe("Example test", function () {
  it("symAsync", async () => {
    const logic = new ExampleLogic();
    const actual = logic.sumAsync(2, 2, 10);

    await expect(actual).resolves.toBe(4);
  });

  it("sum", async () => {
    const logic = new ExampleLogic();

    const actual = logic.sum(2, 2);

    expect(actual).toBe(4);
  });
});
