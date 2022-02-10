import { Schema, model } from "mongoose";
import { IPayment, paymentTypes } from "../interfaces/pagos.interfaces";

const paymentSchema = new Schema<IPayment>({
  amount: {
    type: Number,
    required: [true, "El monto es obligatorio"],
    min: 0
  },
  date: {
    type: Date,
    default: Date.now
  },
  type: {
    type: String,
    required: [true, "El tipo es obligatorio"],
    enum: paymentTypes
  },
  sale: {
    type: Schema.Types.ObjectId,
    ref: "Sale"
  }
});

export const paymentModel = model<IPayment>("Payment", paymentSchema);