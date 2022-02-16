import express, { Application } from "express";
import cors from "cors";
import dbConnection from "./database/database-config";
import productosRoutes from "./routes/productos.routes";
import categoriasRoutes from "./routes/categorias.routes";
import mongoose from "mongoose";

class Server {

  private dbConnection: typeof mongoose | undefined;
  private app: Application;
  private port: string;
  apiPaths = {
    productos: "/api/productos",
    categorias: "/api/categorias",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "4000";
    this.connectDatabase();
    this.middlewares();
    this.routes();
  }

  private async connectDatabase() {
    this.dbConnection = await dbConnection();
  }

  async disconnectDatabase() {
    this.dbConnection?.disconnect();
  }

  private middlewares() {
    this.app.use(cors({ credentials: true, origin: true }));
    this.app.use(express.json());
  }

  private routes() {
    this.app.use(this.apiPaths.productos, productosRoutes);
    this.app.use(this.apiPaths.categorias, categoriasRoutes);
  }

  listen() {
    return this.app.listen(this.port, () => {
      console.log("Listen on port", this.port);
    });
  }

  getApp() {
    return this.app;
  }
}

export default Server;