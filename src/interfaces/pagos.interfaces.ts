export interface IPayment {
    amount: number;
    date: Date;
    type: string;
}

export const paymentTypes = ["TOTAL_PAYMENT", "DEBT_PAYMENT", "FINAL_PAYMENT"];