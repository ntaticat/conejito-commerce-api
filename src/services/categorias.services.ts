import { ICategory } from "../interfaces/categorias.interfaces";
import { categoryModel } from "../models/categorias.model";

class CategoriasServices {
  constructor() { }

  async createCategoria(categoryData: ICategory) {
    try {
      const newCategory = new categoryModel({...categoryData});
      return await newCategory.save();
    } catch (error) {
      console.error(error);
      throw new Error("Error al crear una categoria");
    }
  }
}

export default CategoriasServices;