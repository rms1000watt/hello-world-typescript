import { Router, Request, Response } from "express";
import axios from "axios";

const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
  const out = await axios.get("http://ipinfo.io/");
  res.json(out.data);
});

export { router };
