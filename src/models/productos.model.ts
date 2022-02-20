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
  img: {
    type: String,
    default: ""
  },
  
  categories: [{
    type: Schema.Types.ObjectId,
    ref: "Category"
  }],

  currentPrice: {
    type: Schema.Types.ObjectId,
    ref: "Price"
  },

  prices: [{
    type: Schema.Types.ObjectId,
    ref: "Price"
  }]

});

export const productModel = model<IProduct>("Product", productSchema);