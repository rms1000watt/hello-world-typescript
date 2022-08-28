import * as t from "io-ts";
import { isRight } from "fp-ts/Either";
import { PathReporter } from "io-ts/PathReporter";

const Pizza = t.type({
  customerID: t.number,
  destination: t.union([t.literal("pickup"), t.literal("delivery")]),
  orderID: t.number,
  orderType: t.string,
  promotion: t.union([t.string, t.null, t.undefined]),
  size: t.union([
    t.literal("XL"),
    t.literal("L"),
    t.literal("M"),
    t.literal("S"),
  ]),
  toppings: t.array(
    t.union([
      t.literal("anchovy"),
      t.literal("bacon"),
      t.literal("ham"),
      t.literal("jalepeno"),
      t.literal("olive"),
      t.literal("pepperoni"),
      t.literal("pineapple"),
      t.literal("sausage"),
    ])
  ),
});

console.log(isRight(Pizza.decode(req.body)));
console.log(PathReporter.report(Pizza.decode(req.body)));

export function validatePizza(input: any) {

};
