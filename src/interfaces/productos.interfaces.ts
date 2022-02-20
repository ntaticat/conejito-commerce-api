import { ICategory } from "./categorias.interfaces";
import { IPrice } from "./precios.interfaces";

export interface IProduct {
    _id?: string;
    name: string;
    description: string;
    stock: number;
    state: boolean;
    img: string;
    categories: ICategory[];
    currentPrice: IPrice;
    prices: IPrice[];
}