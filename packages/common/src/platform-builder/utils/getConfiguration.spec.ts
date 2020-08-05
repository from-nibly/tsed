import {Configuration, getConfiguration} from "@tsed/common";
import {expect} from "chai";

describe("getConfiguration", () => {
  it("should return configuration", () => {
    @Configuration({test: "test"})
    class MyModule {
    }

    expect(getConfiguration(MyModule)).to.deep.eq({
      test: "test"
    });
  });

  it("should return configuration (2)", () => {
    @Configuration({
      mount: {
        "/v1": ["/root1/*.ts"]
      },
      componentsScan: [
        "/root1-services/*.ts"
      ]
    })
    class MyModule {
    }

    expect(getConfiguration(MyModule, {
      mount: {
        "/v2": ["/root2/*.ts"]
      },
      componentsScan: [
        "/root2-services/*.ts"
      ]
    })).to.deep.eq({
      "componentsScan": [
        "/root2-services/*.ts"
      ],
      "mount": [
        "/root1-services/*.ts",
        "/root2-services/*.ts"
      ]
    });
  });
});
