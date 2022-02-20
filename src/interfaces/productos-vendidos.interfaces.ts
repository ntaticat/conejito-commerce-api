import { IPrice } from "./precios.interfaces";
import { IProduct } from "./productos.interfaces";

export interface ISoldProduct {
  _id?: string;
  product :IProduct;
  price: IPrice;
  amount: number;
  total: number;
}