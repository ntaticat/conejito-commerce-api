import { Response, Request } from "express";
import { IPayment } from "../interfaces/pagos.interfaces";
import { ISoldProduct } from "../interfaces/productos-vendidos.interfaces";
import { ISale } from "../interfaces/ventas.interfaces";
import VentasServices from "../services/ventas.services";

const ventasServices = new VentasServices();

class VentasController {

  constructor() { }

  async getVenta(req: Request, res: Response) {
    try {
      const ventaId: string = req.params.id;

      const dbVenta = await ventasServices.getSaleById(ventaId);
      res.status(200).json({
        venta: dbVenta
      });
    } catch (error) {
      console.error("Error al obtener la venta:", error);
      res.status(400).json({
        error
      });
    }
  }

  async getVentas(req: Request, res: Response) {
    try {
      const dbVentas = await ventasServices.getSales();
      res.status(200).json({
        ventas: dbVentas
      });
    } catch (error) {
      console.error("Error al obtener ventas:", error);
      res.status(400).json({
        error
      });
    }
  }

  async postVenta(req: Request, res: Response) {
    try {
      const venta: ISale = req.body.venta;
      const productosVendidos: ISoldProduct[] = req.body.productosVendidos;
      const pagos: IPayment[] = req.body.pagos;

      const dbVenta = await ventasServices.registerSale(venta, productosVendidos, pagos);
      res.status(200).json({
        venta: dbVenta
      });
    } catch (error) {
      console.log("Error al registrar venta:", error);
      res.status(400).json({
        error
      });
    }
  }

}

export default VentasController;