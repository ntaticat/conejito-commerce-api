import { Schema, model } from "mongoose";
import { IPrice } from "../interfaces/precios.interfaces";

const priceSchema = new Schema<IPrice>({
  
  amount: {
    type: Number,
    min: [0, "La cantidad del precio no puede ser negativo"],
    required: [true, "La cantidad del precio es requerido"]
  },
  cost: {
    type: Number,
    min: [0, "La cantidad del costo no puede ser negativo"],
    required: [true, "La cantidad del costo es requerido"]
  }

});
priceSchema
export const priceModel = model<IPrice>("Price", priceSchema);