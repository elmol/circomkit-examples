import { WitnessTester } from "circomkit";
import { circomkit } from "./common";

describe("multiplier2", () => {
  let circuit: WitnessTester<["in1","in2"], ["out"]>;

  before(async () => {
    circuit = await circomkit.WitnessTester(`multiplier_2`, {
      file: "multiplier2",
      template: "Multiplier2",
    });
  });

  it("should have correct number of constraints", async () => {
    await circuit.expectConstraintCount(1);
  });

  it("should multiply correctly", async () => {
    await circuit.expectPass({ in1: 3, in2: 5 }, { out: 15});
  });
  
});

