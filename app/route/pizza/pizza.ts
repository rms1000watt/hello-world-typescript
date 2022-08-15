import Ajv from "ajv";
const ajv = new Ajv();

const schemaPizza = {
  type: "object",
  properties: {
    orderID: { type: "number", minimum: 0, maximum: 999999 },
    customerID: { type: "number", minimum: 0, maximum: 999999 },
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
    size: { enum: ["XL", "L", "M", "S"] },
    orderType: { enum: ["phone", "website"] },
    destination: { enum: ["pickup", "delivery"] },
    promotion: { type: "string" },
  },
  required: [
    "orderID",
    "customerID",
    "toppings",
    "size",
    "orderType",
    "destination",
  ],
  additionalProperties: false,
};

export const validatePizza = ajv.compile(schemaPizza);
