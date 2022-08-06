import express, { Express, Request, Response } from 'express';
import { Config } from './config';
// import axios from 'axios';

const app: Express = express();
const config: Config = new Config();

app.get("/", (req: Request, res: Response) => {
    res.send("hello world\n");
});

// app.get("/google", (req: Request, res: Response) => {
//     let out = await axios.get("https://www.google.com/");
// });

app.listen(config.port, () => {
    console.log(`server started at http://localhost:${config.port}`);
});
