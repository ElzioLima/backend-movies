import swaggerConfig from "../docs"

import { serve, setup } from "swagger-ui-express"
import { Express } from "express"
import { noCache } from "../middlewares"

export default (app: Express): void => {
  console.log("\n\nSWAGGER\n\n")
  app.use("/docs", noCache, serve, setup(swaggerConfig))
}
