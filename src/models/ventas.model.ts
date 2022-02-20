import { Schema, model } from "mongoose";
import { ISale } from "../interfaces/ventas.interfaces";

const saleSchema = new Schema<ISale>({
  date: {
    type: Date,
    default: Date.now
  },
  total: {
    type: Number,
    required: [true, "El total es obligatorio"]
  },
  paid: {
    type: Boolean,
    required: [true, "El valor pagado es obligatorio"]
  },
  client: {
    type: Schema.Types.ObjectId,
    ref: "Client"
  },
  soldProducts: [{
    type: Schema.Types.ObjectId,
    ref: "SoldProduct"
  }],
  payments: [{
    type: Schema.Types.ObjectId,
    ref: "Payment"
  }]

});

export const saleModel = model<ISale>("Sale", saleSchema);