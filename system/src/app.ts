import express, { Application } from "express";
import morgan from "morgan";
import * as bodyParser from "body-parser";

class App {
  public app: Application;
  public port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;

    this.initMiddleware();
  }

  private initMiddleware() {
    this.app.use(bodyParser.json());
    this.app.use(morgan("combined"));
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`System listening on the port ${this.port}`);
    });
  }
}

export default App;
