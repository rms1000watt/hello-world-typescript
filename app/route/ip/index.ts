import { Router, Request, Response } from "express";
import axios from "axios";
import Ajv, { DefinedError } from "ajv";

const ajv = new Ajv();
const router: Router = Router();

const schemaOut = {
  type: "object",
  properties: {
    ip: { type: "string" },
    hostname: { type: "string" },
    city: { type: "string" },
    region: { type: "string" },
    country: { type: "string" },
    loc: { type: "string" },
    org: { type: "string" },
    postal: { type: "string" },
    timezone: { type: "string" },
    readme: { type: "string" },
    errors: {
      type: "array",
      items: { type: "string" },
    },
  },
  required: ["ip"],
};

const validateOut = ajv.compile(schemaOut);

router.get("/", async (req: Request, res: Response) => {
  const out = await axios.get("http://ipinfo.io/");
  if (!validateOut(out.data)) {
    const errors: string[] = [];
    for (const err of validateOut.errors as DefinedError[])
      errors.push(`${err.instancePath}: ${err.message}`);
    res.status(500).json({ errors });
    return;
  }

  res.json(out.data);
});

export { router };
