import ProductosVendidosServices from "./productos-vendidos.services";
import { ISale } from "../interfaces/ventas.interfaces";
import { saleModel } from "../models/ventas.model";
import { soldProductModel } from "../models/productos-vendidos.model";
import { IPayment } from "../interfaces/pagos.interfaces";
import { ISoldProduct } from "../interfaces/productos-vendidos.interfaces";
import { paymentModel } from "../models/pagos.model";

const productosVendidosService = new ProductosVendidosServices();

class VentasServices {

  constructor() { }

  async registerSale(saleInfo: ISale, soldProducts: ISoldProduct[], payments: IPayment[]): Promise<ISale> {
    const newSale = new saleModel({ ...saleInfo });

    const dbSoldProducts = await soldProductModel.insertMany(soldProducts);
    const dbPayments = await paymentModel.insertMany(payments);

    newSale.soldProducts = dbSoldProducts;
    newSale.payments = dbPayments;

    const dbSale = await newSale.save();

    await dbSale.populate("soldProducts");
    await dbSale.populate("payments");

    return dbSale;
  }

  // async updateSale(productId: string, productInfo: IProduct): Promise<IProduct> {
  //   const updatedProduct = await productModel.findByIdAndUpdate(productId, { ...productInfo }, { new: true });
  //   if (updatedProduct == undefined || updatedProduct == null) {
  //     throw new Error(`No se pudo actualizar el producto con id ${productId}`);
  //   }
  //   return updatedProduct;
  // }

  // async deleteSale(productId: string): Promise<IProduct> {
  //   const deletedProduct = await productModel.findByIdAndDelete(productId);
  //   if (deletedProduct == undefined || deletedProduct == null) {
  //     throw new Error(`No se pudo eliminar el producto con id ${productId}. Posiblemente ya se ha eliminado`);
  //   }
  //   return deletedProduct;
  // }

  async getSaleById(saleId: string): Promise<ISale> {
    const dbSale = await saleModel.findById(saleId).populate("payments").populate("soldProducts").exec();
    if (dbSale == undefined || dbSale == null) {
      throw new Error(`No se encontró la venta con id ${saleId}`);
    }

    return dbSale;
  }

  async getSales(): Promise<ISale[]> {
    const dbSales = await saleModel.find().exec();
    if (dbSales == undefined || dbSales == null) {
      throw new Error(`No se encontraron las ventas`);
    }
    return dbSales;
  }

  // async updateCategoriasOfProducto(productId: string, productInfo: IProduct) {
  //   const oldProduct = await productModel.findById(productId).populate("categories").exec();

  //   if (oldProduct == undefined || oldProduct == null) {
  //     throw new Error(`No se encontró el producto con id ${productId}`);
  //   }

  //   if(oldProduct?.categories === null || oldProduct?.categories === undefined) {
  //     oldProduct.categories = [];
  //   }

  //   if(productInfo?.categories === null || productInfo?.categories === undefined) {
  //     productInfo.categories = [];
  //   }
    
  //   const oldCategories = [...oldProduct.categories];
  //   const newCategories = [...productInfo.categories];

  //   oldProduct.categories = newCategories;
  //   await oldProduct.save();

  //   const added = this.valoresNoEstanEnArrB(newCategories, oldCategories);
  //   const removed = this.valoresNoEstanEnArrB(oldCategories, newCategories);

  //   await categoryModel.updateMany({ '_id': added }, {$push: { products: oldProduct._id  } });
  //   await categoryModel.updateMany({ '_id': removed }, {$pull: { products: oldProduct._id  } });

  //   await oldProduct.populate("categories");

  //   return oldProduct;
  // }
  // private valoresNoEstanEnArrB(arrA: ICategory[], arrB: ICategory[]) {
  //   const first = arrA.map(category => category._id);
  //   const second = arrB.map(category => category._id);


  //   return first.filter((valueA) => second.indexOf(valueA) === -1);
  // }
}

export default VentasServices;