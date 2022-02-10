import { Response, Request } from "express";
import ProductosServices from "../services/productos.services";

const productosServices = new ProductosServices();

/**
 * @class ProductosController
 * @description Responsible for handling http requests for the /productos route.
 */

class ProductosController {
  
  constructor() {}

  async getProductos(req: Request, res: Response) {
    try {
      await productosServices.getProductos();
      return res.status(200).json({
        message: "Hola Mundo desde controlador"
      });
    } catch (error) {
      console.log("Hubo un error");
    }
  }

}

export default ProductosController;