import { ICategory } from "./categorias.interfaces";

export interface IProduct {
    name: string;
    description: string;
    stock: number;
    state: boolean;
    categories: ICategory[];
}