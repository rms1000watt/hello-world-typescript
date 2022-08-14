import { Router, Request, Response } from "express";
import { validatePizza } from "./pizza";

const router: Router = Router();

router.post("/", async (req: Request, res: Response) => {
  if (validatePizza(req.body)) {
    res.send("valid pizza order");
    return;
  }

  res.status(400).send("invalid pizza order");
});

export { router };
