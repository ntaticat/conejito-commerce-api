import { IClient } from "./clientes.interfaces";
import { IPayment } from "./pagos.interfaces";
import { IProduct } from "./productos.interfaces";

export interface ISale {
    date: Date;
    total: number;
    paid: boolean;
    client: IClient;
    products: IProduct[];
    payments: IPayment[];
}