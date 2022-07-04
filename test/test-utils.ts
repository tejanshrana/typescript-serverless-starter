import { APIGatewayProxyEvent } from "aws-lambda";

export const apiGwMockEvent: APIGatewayProxyEvent = {
  body: "",
  headers: undefined,
  httpMethod: "",
  isBase64Encoded: false,
  multiValueHeaders: undefined,
  multiValueQueryStringParameters: undefined,
  path: "",
  pathParameters: undefined,
  queryStringParameters: undefined,
  requestContext: undefined,
  resource: "",
  stageVariables: undefined,
};
