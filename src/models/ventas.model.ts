import { Schema, model } from "mongoose";
import { ICategory } from "./categorias.model";
import { IClient } from "./clientes.model";
import { IPayment } from "./pagos.model";
import { IProduct } from "./productos.model";

export interface ISale {
  date: Date;
  total: number;
  paid: boolean;
  client: IClient;
  products: IProduct[];
  payments: IPayment[];
}

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
  products: [{
    type: Schema.Types.ObjectId,
    ref: "Product"
  }],
  payments: [{
    type: Schema.Types.ObjectId,
    ref: "Payment"
  }]

});

export const SaleModel = model<ISale>("Sale", saleSchema);