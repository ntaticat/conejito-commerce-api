import { Schema, model } from "mongoose";
import { categoryTypes, ICategory } from "../interfaces/categorias.interfaces";

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

export const categoryModel = model<ICategory>("Category", categorySchema);