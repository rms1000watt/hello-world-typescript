import Ajv from "ajv/dist/jtd";
const ajv = new Ajv();

export const validate = ajv.compile({
  properties: {
    orderID: { type: "uint32" }, // TODO: range
    customerID: { type: "uint32" }, // TODO: range
    toppings: { elements: { enum: ["pepperoni", "bacon", "sausage", "ham"] } },
    size: { enum: ["XL", "L", "M", "S"] },
    orderType: { enum: ["phone", "website"] },
    destination: { enum: ["pickup", "delivery"] },
  },
  optionalProperties: {
    promotion: { type: "string" },
  },
});
