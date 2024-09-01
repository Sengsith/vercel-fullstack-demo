import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  console.log("Data from test2!");
  res.send({ message: "Data from test2!" });
});

export default router;
