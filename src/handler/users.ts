import { APIGatewayProxyEvent } from "aws-lambda";

export const handle = async (event: APIGatewayProxyEvent) => {
  return {
    status: 200,
  };
};
