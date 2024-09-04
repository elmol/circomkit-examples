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

});

