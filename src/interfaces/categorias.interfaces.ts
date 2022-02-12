import { IProduct } from "./productos.interfaces";

export interface ICategory {
    _id?: string;
    name: string;
    description: string;
    state: boolean;
    categoryType: string;
    products: IProduct[];
}

export const categoryTypes = ["PRODUCT_CATEGORY", "EASY_CATEGORY"];