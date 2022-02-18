import { ICategory } from "./categorias.interfaces";

export interface IProduct {
    _id?: string;
    name: string;
    description: string;
    stock: number;
    state: boolean;
    img: string;
    cost: number;
    price: number;
    categories: ICategory[];
}