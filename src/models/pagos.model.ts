import { Schema, model } from "mongoose";
import { ISale } from "./ventas.model";

export interface IPayment {
  amount: number;
  date: Date;
  type: string;
  sale: ISale;
}

enum paymentTypes {
  TOTAL_PAYMENT = "TOTAL_PAYMENT",
  DEBT_PAYMENT = "DEBT_PAYMENT",
  FINAL_PAYMENT = "FINAL_PAYMENT",
}

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

export const PaymentModel = model<IPayment>("Payment", paymentSchema);