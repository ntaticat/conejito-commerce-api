import { ISale } from "./ventas.interfaces";

export interface IPayment {
    amount: number;
    date: Date;
    type: string;
    sale: ISale;
}

export enum paymentTypes {
    TOTAL_PAYMENT = "TOTAL_PAYMENT",
    DEBT_PAYMENT = "DEBT_PAYMENT",
    FINAL_PAYMENT = "FINAL_PAYMENT",
}