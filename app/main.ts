import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";

import { Config } from "./config";
import { Pizza, loadPizzas } from "./model";
import { router as ipRouter } from "./route/ip";
import { router as pizzaRouter } from "./route/pizza";

function main() {
  // dependency injection for config, pizzas, etc.
  const config: Config = new Config();
  try {
    config.validate();
  } catch (e) {
    console.log("Invalid config:", e);
    process.exit(1);
  }

  const pizzas: Pizza[] = loadPizzas();

  // create app
  const app: Express = express();

  // middleware: parse bodies as json
  app.use(bodyParser.json());

  // set app globals
  app.set("pizzas", pizzas);

  // healthcheck route
  app.get("/", (req: Request, res: Response) => {
    res.send("ok\n");
  });

  // other routes
  app.use("/ip", ipRouter);
  app.use("/pizza", pizzaRouter);

  // start server
  app.listen(config.port, () => {
    console.log(`server started at http://localhost:${config.port}`);
  });
}

main();
