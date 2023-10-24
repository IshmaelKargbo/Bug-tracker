import app from "./app";
import { Request, Response } from "express";

const port: number = process.env.PORT
  ? Number.parseInt(process.env.PORT)
  : 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!!!");
});

app.listen(port);
