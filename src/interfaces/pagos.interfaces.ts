import { ISale } from "./ventas.interfaces";

export interface IPayment {
    amount: number;
    date: Date;
    type: string;
    sale: ISale;
}

export const paymentTypes = ["TOTAL_PAYMENT", "DEBT_PAYMENT", "FINAL_PAYMENT"];