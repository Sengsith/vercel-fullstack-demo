import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  console.log("Data from test1!");
  res.setHeader("Content-Type", "application/json");
  res.json({ message: "Hello from test1!" });
});

export default router;
