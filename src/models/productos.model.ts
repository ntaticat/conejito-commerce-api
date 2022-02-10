import { Schema, model } from "mongoose";
import { IProduct } from "../interfaces/productos.interfaces";

const productSchema = new Schema<IProduct>({
  
  name: {
    type: String,
    required: [true, "El nombre es obligatorio"]
  },
  description: {
    type: String,
    default: "Sin descripción"
  },
  stock: {
    type: Number,
    min: [0, "No puede haber numeros negativos en el stock"],
    default: 0
  },
  
  state: {
    type: Boolean,
    default: true
  },
  categories: [{
    type: Schema.Types.ObjectId,
    ref: "Category"
  }]

});

export const ProductModel = model<IProduct>("Product", productSchema);