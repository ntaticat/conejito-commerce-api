import { Schema, model } from "mongoose";
import { ISale } from "./ventas.model";

export interface IClient {
  name: string;
  info: string;
  state: boolean;
  sales: ISale[];
}

const clientSchema = new Schema<IClient>({
  
  name: {
    type: String,
    required: [true, "El nombre es obligatorio"]
  },
  info: {
    type: String,
    default: "Sin información"
  },
  state: {
    type: Boolean,
    default: true
  },
  sales: [{
    type: Schema.Types.ObjectId,
    ref: "Sale"
  }]

});

export const ClientModel = model<IClient>("Client", clientSchema);