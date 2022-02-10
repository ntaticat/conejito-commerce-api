import { ISale } from "./ventas.interfaces";

export interface IClient {
    name: string;
    info: string;
    state: boolean;
    sales: ISale[];
  }