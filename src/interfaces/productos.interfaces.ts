import { ICategory } from "./categorias.interfaces";

export interface IProduct {
    _id?: string;
    name: string;
    description: string;
    stock: number;
    state: boolean;
    categories: ICategory[];
}