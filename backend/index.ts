import express, { Request, Response } from "express";
import cors from "cors";
import test1Router from "./routes/test1";
import test2Router from "./routes/test2";

const app = express();
const port = 3001;

app.use(cors());

// Root route
app.get("/", (req: Request, res: Response) => {
  console.log("Request received.");
  res.send({ message: "Hello from the backend!" });
});

// Testing routes
app.use("/test1", test1Router);
app.use("/test2", test2Router);

app.listen(port, () => {
  console.log(`Server is running.`);
});

//https://youtu.be/CNJkX9rYI8U?si=a-H1CPzlT0g0pXWe
