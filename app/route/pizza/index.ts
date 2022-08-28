import { Router, Request, Response } from "express";
import { validatePizza as vpAJV } from "./pizza-ajv";
import { validatePizza as vpIOTS } from "./pizza-iots";

const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
  const pizzas: [] = req.app.get("pizzas");
  res.json(pizzas);
});

router.post("/", async (req: Request, res: Response) => {
  if (vpIOTS(req.body)) {
    console.log("valid pizza order io-ts");
  }

  if (vpAJV(req.body)) {
    console.log("valid pizza order ajv");
    res.send("valid pizza order");
    return;
  }

  res.status(400).send("invalid pizza order");
});

export { router };
