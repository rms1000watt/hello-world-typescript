import { Router, Request, Response } from "express";
import { validatePizza as vpAJV } from "./pizza-ajv";
import { validatePizza as vpIOTS } from "./pizza-iots";

const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
  const pizzas: [] = req.app.get("pizzas");
  res.json(pizzas);
});

router.post("/", async (req: Request, res: Response) => {
  const outIOTS = vpIOTS(req.body);
  if (outIOTS.length > 0) {
    console.log("invalid pizza order io-ts:", outIOTS);

    // Usually exit early here, but the other test will fail and will exit there
  }

  if (!vpAJV(req.body)) {
    console.log("invalid pizza order ajv:");
    for (const err of vpAJV.errors as [])
      console.log(`ERROR: ${err["instancePath"]}: ${err["message"]}`);

    res.status(400).send("invalid pizza order");
    return;
  }

  res.send("valid pizza order");
});

export { router };
