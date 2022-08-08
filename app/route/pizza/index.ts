import {Router, Request, Response} from 'express';

const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
  res.send("TODO: implement pizza handling next")
});

export {router};
