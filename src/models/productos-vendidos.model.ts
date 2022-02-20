import { Schema, model } from "mongoose";
import { ISoldProduct } from "../interfaces/productos-vendidos.interfaces";

const soldProductSchema = new Schema<ISoldProduct>({
  amount: {
    type: Number,
    min: [0, "No puede haber numeros negativos en la cantidad"],
    default: 0
  },
  total: {
    type: Number,
    min: [0, "No puede haber numeros negativos en el total del producto"],
    default: 0
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product"
  },
  price: {
    type: Schema.Types.ObjectId,
    ref: "Price"
  },
});

export const soldProductModel = model<ISoldProduct>("SoldProduct", soldProductSchema);