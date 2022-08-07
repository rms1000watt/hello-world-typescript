import express, {Express, Request, Response} from 'express';
import bodyParser from 'body-parser';

import {Config} from './config';
import {router as ipRouter} from './route/ip';

function main() {
  const config: Config = new Config();
  try { config.validate() } catch(e) {
    console.log("Invalid config:", e)
    process.exit(1)
  }

  const app: Express = express();
  app.use(bodyParser.json())

  app.get("/", (req: Request, res: Response) => {
    res.send("ok\n");
  });

  app.use("/ip", ipRouter)

  app.listen(config.port, () => {
    console.log(`server started at http://localhost:${config.port}`);
  });
}

main()