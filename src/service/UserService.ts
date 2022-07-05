import internal = require("stream");
import pino from "pino";
import Logger = pino.Logger;

export class UserService {
  logger;

  constructor(logger: Logger<internal.Writable>) {
    this.logger = logger.child({ module: "UserService" });
  }

  createUser() {
    this.logger = this.logger.child({ module: "UserService" });
    this.logger.info("Creating a new user");
  }
}
