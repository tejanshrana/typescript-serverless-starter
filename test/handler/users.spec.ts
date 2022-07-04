import { handle } from "../../src/handler/users";
import { apiGwMockEvent } from "../test-utils";

describe("user API tests", () => {
  it("should return success", async () => {
    const response = await handle(apiGwMockEvent);
    expect(response).toStrictEqual({ status: 200 });
  });
});
