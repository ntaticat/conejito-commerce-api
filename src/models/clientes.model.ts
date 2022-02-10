import { Schema, model } from "mongoose";
import { IClient } from "../interfaces/clientes.interfaces";

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