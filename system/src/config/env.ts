import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const PORT = process.env.PORT ? Number.parseInt(process.env.PORT) : 3000;

export { PORT };
