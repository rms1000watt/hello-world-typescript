import Ajv from "ajv";
const ajv = new Ajv();

const schemaPizza = {
  type: "object",
  properties: {
    customerID: { type: "number", minimum: 0, maximum: 999999 },
    destination: { enum: ["pickup", "delivery"] },
    orderID: { type: "number", minimum: 0, maximum: 999999 },
    orderType: { enum: ["phone", "website"] },
    promotion: { type: "string" },
    size: { enum: ["XL", "L", "M", "S"] },
    toppings: {
      type: "array",
      items: {
        enum: [
          "anchovy",
          "bacon",
          "ham",
          "jalepeno",
          "olive",
          "pepperoni",
          "pineapple",
          "sausage",
        ],
      },
    },
  },
  required: [
    "customerID",
    "destination",
    "orderID",
    "orderType",
    "size",
    "toppings",
  ],
  additionalProperties: false,
};

export const validatePizza = ajv.compile(schemaPizza);
