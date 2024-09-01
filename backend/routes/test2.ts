import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  console.log("Data from test2!");
  res.setHeader("Content-Type", "application/json");
  res.json({ message: "Hello from test2!" });
});

export default router;
