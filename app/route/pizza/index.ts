import { Router, Request, Response } from "express";
import { validatePizza as vpAJV } from "./pizza-ajv";
import { validatePizza as vpIOTS } from "./pizza-iots";
import { Pizza } from "./pizza-tjs";

import schemaPizza from "./pizza-tjs.schema.json";
import Ajv from "ajv";

const ajv = new Ajv();
const vpTJS = ajv.compile(schemaPizza);
const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
  const pizzas: [] = req.app.get("pizzas");
  res.json(pizzas);
});

router.post("/", async (req: Request, res: Response) => {
  console.log(vpTJS(req.body));
  // if (!vpTJS(req.body)) {
  //   // console.log("invalid pizza order tjs1:");
  //   // for (const err of vpTJS.errors as []) {
  //   //   console.log(`ERROR: ${err["instancePath"]}: ${err["message"]}`);
  //   // }
  // }

  // TODO: the schema isn't failing when it should
  handlePizza(req.body);

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

function handlePizza(pizza: Pizza) {
  if (!vpTJS(pizza)) {
    console.log("invalid pizza order tjs2:");
    for (const err of vpTJS.errors as [])
      console.log(`ERROR: ${err["instancePath"]}: ${err["message"]}`);

    // Usually exit early here, but the other test will fail and will exit there
  }

  console.log("pizza.customerID:", pizza.customerID);
  console.log("pizza.destination:", pizza.destination);
  console.log("pizza.orderID:", pizza.orderID);
}

export { router };
