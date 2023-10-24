import App from "./app";
import { PORT } from "./config/env";

const app = new App(PORT);

app.listen();