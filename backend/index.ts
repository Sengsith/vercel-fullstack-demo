import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const port = 3001;

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  console.log("Request received.");
  res.setHeader("Content-Type", "application/json");
  res.json({ message: "Hello from the backend!" });
});

app.listen(port, () => {
  console.log(`Server is running.`);
});

//https://youtu.be/CNJkX9rYI8U?si=a-H1CPzlT0g0pXWe
