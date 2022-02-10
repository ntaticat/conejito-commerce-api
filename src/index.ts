import dotenv from "dotenv";
import Server from "./server";
dotenv.config().parsed;

const server = new Server();
server.listen();