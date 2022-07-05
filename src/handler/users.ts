import { APIGatewayProxyEvent, Context } from "aws-lambda";
import { createLoggerWithRequest, getLogger } from "../util/logger";
import { UserService } from "../service/UserService";

export const handle = async (event: APIGatewayProxyEvent, context: Context) => {
  createLoggerWithRequest(event, context);

  const logger = getLogger({
    parent: "user.handle",
    data: "Api called with no args",
  });
  try {
    logger.info("New users being created");
    const userService: UserService = new UserService(logger);
    userService.createUser();
    return {
      status: 200,
    };
  } catch (error) {
    logger.error(error);
  }
};
