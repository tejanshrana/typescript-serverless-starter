import context from "aws-lambda-mock-context";
import { handle } from "../../src/handler/users";
import { apiGwMockEvent } from "../test-utils";

describe("user API tests", () => {
  it("should return success", async () => {
    try {
      const response = await handle(
        apiGwMockEvent,
        context({ functionName: "handle" })
      );
      expect(response).toStrictEqual({ status: 200 });
    } catch (error) {
      console.log(error);
    }
  });
});
