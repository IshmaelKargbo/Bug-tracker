import app, {PORT} from "./app";
import { Request, Response } from "express";

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!!!");
});

app.listen(PORT);
