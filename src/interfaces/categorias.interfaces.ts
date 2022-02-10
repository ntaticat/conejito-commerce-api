import { IProduct } from "./productos.interfaces";

export interface ICategory {
    _id?: string;
    name: string;
    description: string;
    state: boolean;
    categoryType: string;
    products: IProduct[];
}

export enum categoryTypes {
    PRODUCT_CATEGORY = "PRODUCT_CATEGORY",
    EASY_CATEGORY = "EASY_CATEGORY"
}