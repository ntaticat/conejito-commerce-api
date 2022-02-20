export interface IPayment {
    _id?: string;
    amount: number;
    date: Date;
    type: string;
}

export const paymentTypes = ["TOTAL_PAYMENT", "DEBT_PAYMENT", "FINAL_PAYMENT"];