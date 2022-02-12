import express, { Application } from "express";
import cors from "cors";
import dbConnection from "./database/database-config";
import productosRoutes from "./routes/productos.routes";
import categoriasRoutes from "./routes/categorias.routes";

class Server {

  private app: Application;
  private port: string;
  private apiPaths = {
    productos: "/api/productos",
    categorias: "/api/categorias",
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
    this.app.use(cors({credentials: true, origin: true}));
    this.app.use(express.json());
  }

  private routes() {
    this.app.use(this.apiPaths.productos, productosRoutes);
    this.app.use(this.apiPaths.categorias, categoriasRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Listen on port", this.port);
    });
  }
}

export default Server;