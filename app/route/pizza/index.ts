import { Router, Request, Response } from "express";
import { validate } from "./pizza";

const router: Router = Router();

router.post("/", async (req: Request, res: Response) => {
  if (validate(req.body)) {
    res.send("valid pizza order");
    return;
  }

  res.status(400).send("invalid pizza order");
});

export { router };
