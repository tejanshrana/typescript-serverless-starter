import pino from "pino";
import { lambdaRequestTracker, pinoLambdaDestination } from "pino-lambda";
import { LoggerParams } from "./data-models";

export const createLoggerWithRequest = lambdaRequestTracker();
export const getLogger = (options: LoggerParams) => {
  const logger = pino(pinoLambdaDestination());
  logger.setBindings(options);
  return logger;
};
