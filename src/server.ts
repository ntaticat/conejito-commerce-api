import express, { Application } from "express";
import cors from "cors";
import productosRoutes from "./routes/productos.routes";
import dbConnection from "./database/database-config";

class Server {

  private app: Application;
  private port: string;
  private apiPaths = {
    productos: "/api/productos" 
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "4000";

    this.database();
    this.middlewares();
    this.routes();
  }

  private async database() {
    await dbConnection();
  }

  private middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  private routes() {
    this.app.use(this.apiPaths.productos, productosRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Listen on port", this.port);
    });
  }
}

export default Server;