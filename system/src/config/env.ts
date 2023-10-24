import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

const PREFIX = process.env.PREFIX ? process.env.PREFIX : "/";

const POSTGRES_HOST = process.env.POSTGRES_HOST
  ? process.env.POSTGRES_HOST
  : "localhost";

const POSTGRES_PORT = process.env.POSTGRES_PORT
  ? Number(process.env.POSTGRES_PORT)
  : 5432;

const POSTGRES_USER = process.env.POSTGRES_USER
  ? process.env.POSTGRES_USER
  : "admin";

const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD
  ? process.env.POSTGRES_PASSWORD
  : "admin";

const POSTGRES_DB = process.env.POSTGRES_DB
  ? process.env.POSTGRES_DB
  : "bug_tracker";

export {
  PORT,
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  PREFIX,
  POSTGRES_DB,
};
