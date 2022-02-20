import { IPrice } from "../interfaces/precios.interfaces";
import { ISoldProduct } from "../interfaces/productos-vendidos.interfaces";
// import { IProductosService } from "./services.interfaces";
import { soldProductModel } from "../models/productos-vendidos.model";

class ProductosVendidosServices {

  constructor() { }

  async registerSoldProduct(soldProductInfo: ISoldProduct): Promise<ISoldProduct> {
    const newSoldProduct = new soldProductModel({...soldProductInfo});
    const dbSoldProduct = await newSoldProduct.save();
    return dbSoldProduct;
  }

  // async updateSoldProduct(priceId: string, priceInfo: IPrice): Promise<IPrice> {
  //   const updatedPrice = await priceModel.findByIdAndUpdate(priceId, {...priceInfo}, { new: true });
  //   if (updatedPrice == undefined || updatedPrice == null) {
  //     throw new Error(`No se pudo actualizar el precio con id ${priceId}`);
  //   }
  //   return updatedPrice;
  // }

  async unregisterSoldProduct(soldProductId: string = ""): Promise<ISoldProduct> {
    const deletedSoldProduct = await soldProductModel.findByIdAndDelete(soldProductId);
    if (deletedSoldProduct == undefined || deletedSoldProduct == null) {
      throw new Error(`No se pudo eliminar el producto vendido con id ${soldProductId}. Posiblemente ya se ha eliminado`);
    }
    return deletedSoldProduct;
  }
}

export default ProductosVendidosServices;