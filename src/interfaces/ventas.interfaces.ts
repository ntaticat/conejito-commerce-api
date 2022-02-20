import { IClient } from "./clientes.interfaces";
import { IPayment } from "./pagos.interfaces";
import { ISoldProduct } from "./productos-vendidos.interfaces";
import { IProduct } from "./productos.interfaces";

export interface ISale {
    date: Date;
    total: number;
    paid: boolean;
    client: IClient;
    soldProducts: ISoldProduct[];
    payments: IPayment[];
}