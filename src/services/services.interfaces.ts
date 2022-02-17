import { ICategory } from "../interfaces/categorias.interfaces";
import { IProduct } from "../interfaces/productos.interfaces";

export interface ICategoriasService {
  createCategoria(categoryInfo: ICategory): Promise<ICategory>;
  updateCategoria(categoryId: string, categoryInfo: ICategory): Promise<ICategory>;
  deleteCategoria(categoryId: string): Promise<ICategory>;
  getCategoriaById(categoryId: string): Promise<ICategory>;
  getCategorias(): Promise<ICategory[]>;
}

export interface IProductosService {
  createProducto(productInfo: IProduct): Promise<IProduct>;
  updateProducto(productId: string, productInfo: IProduct): Promise<IProduct>;
  deleteProducto(productId: string): Promise<IProduct>;
  getProductoById(productId: string): Promise<IProduct>;
  getProductos(): Promise<IProduct[]>;
}