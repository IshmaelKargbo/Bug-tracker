import App from "./app";
import { PORT } from "./config/env";
import UserController from "./modules/user/controller";

const app = new App([
  new UserController()
], PORT);

app.listen();