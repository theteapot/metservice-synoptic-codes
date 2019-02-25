const parseCode = require("../src");

describe("Testing metservice codes", () => {
  it("Should successfully parse a surface recording", () => {
    console.log(
      parseCode({
        code:
          "93023 16/// /1510 10210 20112 40128 52012 69944 333 20127 70004=",
        format: "FM_12"
      })
    );
  });
});
