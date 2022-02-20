import { Response, Request } from "express";
import { IPrice } from "../interfaces/precios.interfaces";
import { IProduct } from "../interfaces/productos.interfaces";
import ProductosServices from "../services/productos.services";

const productosServices = new ProductosServices();

class ProductosController {

  constructor() { }

  async getProducto(req: Request, res: Response) {
    try {
      const categoriaId: string = req.params.id;

      const dbProducto = await productosServices.getProductoById(categoriaId);
      res.status(200).json({
        producto: dbProducto
      });
    } catch (error) {
      console.error("Error al obtener el producto:", error);
      res.status(400).json({
        error
      });
    }
  }

  async getProductos(req: Request, res: Response) {
    try {
      const dbProductos = await productosServices.getProductos();
      res.status(200).json({
        productos: dbProductos
      });
    } catch (error) {
      console.error("Error al obtener productos:", error);
      res.status(400).json({
        error
      });
    }
  }

  async postProducto(req: Request, res: Response) {
    try {
      const producto: IProduct = req.body.producto;
      const dbProducto = await productosServices.createProducto(producto);
      res.status(200).json({
        producto: dbProducto
      });
    } catch (error) {
      console.log("Error al registrar producto:", error);
      res.status(400).json({
        error
      });
    }
  }

  async putProducto(req: Request, res: Response) {
    try {
      const productoId: string = req.params.id;
      const producto: IProduct = req.body.producto;
      const dbProducto = await productosServices.updateProducto(productoId, producto);
      res.status(200).json({
        producto: dbProducto
      });
    } catch (error) {
      console.log("Error al registrar producto:", error);
      res.status(400).json({
        error
      });
    }
  }

  async deleteProducto(req: Request, res: Response) {
    try {
      const productoId: string = req.params.id;
      const dbProducto = await productosServices.deleteProducto(productoId);
      res.status(200).json({
        producto: dbProducto
      });
    } catch (error) {
      res.status(400).json({
        error
      });
    }
  }

  async postProductoPrecio(req: Request, res: Response) {
    try {
      const productoId: string = req.params.productoId;
      const precio: IPrice = req.body.precio;

      const dbProducto = await productosServices.addPriceToProducto(productoId, precio);
      res.status(200).json({
        producto: dbProducto
      });
    } catch (error) {
      console.log("Error al registrar producto:", error);
      res.status(400).json({
        error
      });
    }
  }

  async deleteProductoPrecio(req: Request, res: Response) {
    try {
      const productoId: string = req.params.productoId;
      const precioId: string = req.params.precioId;

      const dbProducto = await productosServices.removePriceFromProducto(productoId, precioId);
      res.status(200).json({
        producto: dbProducto
      });
    } catch (error) {
      res.status(400).json({
        error
      });
    }
  }

}

export default ProductosController;