import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  console.log("Data from test1!");
  res.send({ message: "Data from test1!" });
});

export default router;
