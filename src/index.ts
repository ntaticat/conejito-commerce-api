import dotenv from "dotenv";
import Server from "./server";
dotenv.config();

export const server = new Server();
export const listenServer = server.listen();