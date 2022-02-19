import express, { Application } from "express";
import cors from "cors";
import dbConnection from "./database/database-config";
import productosRoutes from "./routes/productos.routes";
import categoriasRoutes from "./routes/categorias.routes";
import uploadsRoutes from "./routes/uploads.routes";
import mongoose from "mongoose";
import multer from "multer";

class Server {

  private dbConnection: typeof mongoose | undefined;
  private app: Application;
  private port: string;
  apiPaths = {
    productos: "/api/productos",
    categorias: "/api/categorias",
    uploads: "/api/uploads"
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
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: true}));
    this.app.use(cors({ origin: "http://localhost:3000", credentials: true }));
    this.app.use("/uploads", express.static("uploads"));
  }

  private routes() {
    this.app.use(this.apiPaths.productos, productosRoutes);
    this.app.use(this.apiPaths.categorias, categoriasRoutes);
    this.app.use(this.apiPaths.uploads, uploadsRoutes);
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