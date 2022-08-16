import { Router, Request, Response } from "express";
import axios from "axios";
import Ajv from "ajv";

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
  },
  required: ["ip"], // TODO: write each field or make all optional?
};

const validateOut = ajv.compile(schemaOut);

router.get("/", async (req: Request, res: Response) => {
  const out = await axios.get("http://ipinfo.io/");
  res.json(out.data);
  console.log(validateOut(out.data));
});

export { router };
