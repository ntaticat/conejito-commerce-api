import { IProduct } from "../interfaces/productos.interfaces";
import { IProductosService } from "./services.interfaces";
import { productModel } from "../models/productos.model";

class ProductosServices implements IProductosService {

  constructor() { }

  async createProducto(productInfo: IProduct): Promise<IProduct> {
    const newProduct = new productModel({...productInfo});
    const dbProduct = await newProduct.save();
    return dbProduct;
  }

  async updateProducto(productId: string, productInfo: IProduct): Promise<IProduct> {
    const updatedProduct = await productModel.findByIdAndUpdate(productId, {...productInfo});
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
    return dbProduct;
  }

  async getProductos(): Promise<IProduct[]> {
    const dbProducts = await productModel.find();
    if (dbProducts == undefined || dbProducts == null) {
      throw new Error(`No se encontraron productos`);
    }
    return dbProducts;
  }
}

export default ProductosServices;