import express, { Application } from "express";
import morgan from "morgan";
import * as bodyParser from "body-parser";
import { PREFIX } from "./config/env";
import DB from "./config/orm";
import ErrorMiddleware from "./exceptions/middleware";

class App {
  public app: Application;
  public port: number;

  constructor(controllers, port: number) {
    this.app = express();
    this.port = port;

    this.initMiddleware();
    this.initDB();
    this.initControllers(controllers);
    this.initErrorHandling();
  }

  private initDB() {
    DB.initialize()
      .then(() => {
        console.log("Data Source has been initialized!");
      })
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });
  }

  private initMiddleware() {
    this.app.use(bodyParser.json());
    this.app.use(morgan("combined"));
  }

  private initErrorHandling() {
    this.app.use(ErrorMiddleware);
  }

  private initControllers(controllers) {
    controllers.forEach((controller) => {
      this.app.use(PREFIX, controller.router);
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`System listening on the port ${this.port}`);
    });
  }
}

export default App;
