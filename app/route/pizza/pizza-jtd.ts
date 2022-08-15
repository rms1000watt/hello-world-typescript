import Ajv from "ajv/dist/jtd";
const ajv = new Ajv();

const schemaPizza = {
  properties: {
    orderID: { type: "uint32" },
    customerID: { type: "uint32" },
    toppings: {
      elements: {
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
  },
  optionalProperties: {
    promotion: { type: "string" },
  },
};

export const validatePizza = ajv.compile(schemaPizza);
