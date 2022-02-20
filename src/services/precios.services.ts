import { IPrice } from "../interfaces/precios.interfaces";
// import { IProductosService } from "./services.interfaces";
import { priceModel } from "../models/precios.model";

class PreciosServices {

  constructor() { }

  async registerPrice(priceInfo: IPrice): Promise<IPrice> {
    const newPrice = new priceModel({...priceInfo});
    const dbPrice = await newPrice.save();
    return dbPrice;
  }

  async updatePrice(priceId: string, priceInfo: IPrice): Promise<IPrice> {
    const updatedPrice = await priceModel.findByIdAndUpdate(priceId, {...priceInfo}, { new: true });
    if (updatedPrice == undefined || updatedPrice == null) {
      throw new Error(`No se pudo actualizar el precio con id ${priceId}`);
    }
    return updatedPrice;
  }

  async unregisterPrice(priceId: string = ""): Promise<IPrice> {
    const deletedPrice = await priceModel.findByIdAndDelete(priceId);
    if (deletedPrice == undefined || deletedPrice == null) {
      throw new Error(`No se pudo eliminar el precio con id ${priceId}. Posiblemente ya se ha eliminado`);
    }
    return deletedPrice;
  }
}

export default PreciosServices;