import { Schema, model } from "mongoose";
import { IProduct } from "./productos.model";

export interface ICategory {
  name: string;
  description: string;
  state: boolean;
  categoryType: string;
  products: IProduct[];
}

enum categoryTypes {
  PRODUCT_CATEGORY = "PRODUCT_CATEGORY",
  EASY_CATEGORY = "EASY_CATEGORY"
}

const categorySchema = new Schema<ICategory>({
  
  name: {
    type: String,
    required: [true, "El nombre es obligatorio"]
  },
  description: {
    type: String,
    default: "Sin descripción"
  },
  state: {
    type: Boolean,
    default: true
  },
  categoryType: {
    type: String,
    required: [true, "El tipo de categoria es obligatorio"],
    enum: categoryTypes
  },
  products: [{
    type: Schema.Types.ObjectId,
    ref: "Product" 
  }]

});

export const CategoryModel = model<ICategory>("Category", categorySchema);