import { IProduct } from "../interfaces/productos.interfaces";
import { IProductosService } from "./services.interfaces";
import { productModel } from "../models/productos.model";
import PreciosService from "./precios.services";
import { IPrice } from "../interfaces/precios.interfaces";

const preciosService = new PreciosService();

class ProductosServices implements IProductosService {

  constructor() { }

  async createProducto(productInfo: IProduct): Promise<IProduct> {
    const newProduct = new productModel({...productInfo});
    const dbProduct = await newProduct.save();
    return dbProduct;
  }

  async updateProducto(productId: string, productInfo: IProduct): Promise<IProduct> {
    const updatedProduct = await productModel.findByIdAndUpdate(productId, {...productInfo}, { new: true });
    if (updatedProduct == undefined || updatedProduct == null) {
      throw new Error(`No se pudo actualizar el producto con id ${productId}`);
    }
    return updatedProduct;
  }

  async deleteProducto(productId: string): Promise<IProduct> {
    const deletedProduct = await productModel.findByIdAndDelete(productId);
    if (deletedProduct == undefined || deletedProduct == null) {
      throw new Error(`No se pudo eliminar el producto con id ${productId}. Posiblemente ya se ha eliminado`);
    }
    return deletedProduct;
  }

  async getProductoById(productId: string): Promise<IProduct> {
    const dbProduct = await productModel.findById(productId);
    if (dbProduct == undefined || dbProduct == null) {
      throw new Error(`No se encontró el producto con id ${productId}`);
    }

    await dbProduct.populate("prices", "amount cost");
    await dbProduct.populate("currentPrice");

    return dbProduct;
  }

  async getProductos(): Promise<IProduct[]> {
    const dbProducts = await productModel.find().populate("currentPrice", "amount cost").exec();
    if (dbProducts == undefined || dbProducts == null) {
      throw new Error(`No se encontraron productos`);
    }
    return dbProducts;
  }

  // PRECIOS

  async addPriceToProducto(productId: string, priceInfo: IPrice): Promise<IProduct> {
    const dbProduct = await productModel.findById(productId);

    if (dbProduct == undefined || dbProduct == null) {
      throw new Error(`No se encontró el producto con id ${productId}`);
    }

    const dbPrice = await preciosService.registerPrice(priceInfo);

    dbProduct.prices.push(dbPrice);
    dbProduct.currentPrice = dbPrice;

    const savedProduct = await dbProduct.save();

    await savedProduct.populate("currentPrice");
    await savedProduct.populate("prices", "amount cost");

    return savedProduct;
  }

  async removePriceFromProducto(productId: string, priceId: string): Promise<IProduct> {
    const dbProduct = await productModel.findById(productId);

    if (dbProduct == undefined || dbProduct == null) {
      throw new Error(`No se encontró el producto con id ${productId}`);
    }

    const priceIndex = dbProduct.prices.findIndex((price) => price._id === priceId);

    if (priceIndex == -1) {
      throw new Error(`No se encontró el precio con id ${priceId} en el producto con id ${productId}`); 
    }

    dbProduct.prices.splice(priceIndex, 1);

    if(dbProduct.currentPrice?._id === priceId) {
      dbProduct.currentPrice = {
        _id: "",
        amount: 0,
        cost: 0
      };
    }

    await preciosService.unregisterPrice(priceId);

    return await dbProduct.save();
  }
}

export default ProductosServices;