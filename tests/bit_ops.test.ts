import { WitnessTester } from "circomkit";
import { circomkit } from "./common";

describe("bit_ops", () => {

  describe("bitCheck", () => {
    let circuit: WitnessTester<["in"], ["out"]>;

    before(async () => {
      circuit = await circomkit.WitnessTester(`bit_ops_check`, {
        file: "bit_ops",
        template: "bitCheck",
      });
    });

    it("should have correct number of constraints", async () => {
      await circuit.expectConstraintCount(1);
    });

    it("should correctly validate binary inputs", async () => {
      await circuit.expectPass({ in: 1 }, { out: 1 });
      await circuit.expectPass({ in: 0 }, { out: 0 });
    });

    it("should fail for non-binary inputs", async () => {
      await circuit.expectFail({ in: 42 });
      await circuit.expectFail({ in: 16 });
      await circuit.expectFail({ in: -1 });
    });
  });


  describe("And", () => {
    let circuit: WitnessTester<["bit1", "bit2"], ["out"]>;

    before(async () => {
      circuit = await circomkit.WitnessTester(`bit_ops_and`, {
        file: "bit_ops",
        template: "And",
      });
    });

    it("should correctly validate binary AND", async () => {
      await circuit.expectPass({ bit1: 1, bit2: 1 }, { out: 1 });
      await circuit.expectPass({ bit1: 1, bit2: 0 }, { out: 0 });
      await circuit.expectPass({ bit1: 0, bit2: 1 }, { out: 0 });
      await circuit.expectPass({ bit1: 0, bit2: 0 }, { out: 0 });
    });

    it("should fail for non-binary inputs", async () => {
      await circuit.expectFail({ bit1: 12, bit2: 1 });
      await circuit.expectFail({ bit1: 0, bit2: 10 });
      await circuit.expectFail({ bit1: -1, bit2: 1 });
    });

  });


});

