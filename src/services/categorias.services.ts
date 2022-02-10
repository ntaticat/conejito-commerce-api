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

  async updateCategoria(categoryId: string, categoryData: ICategory) {
    try {
      const dbCategory = await categoryModel.findByIdAndUpdate(categoryId, categoryData, { new: true });

      if (dbCategory == undefined || dbCategory == null) {
        throw new Error(`No se pudo actualizar la categoria con id ${categoryId}`);
      }

      return dbCategory;
    } catch (error) {
      console.error(error);
      throw new Error("Error al actualizar una categoria");
    }
  }

  async deleteCategoria(categoryId: string) {
    try {
      const deleteResult = await categoryModel.findByIdAndDelete(categoryId);

      if (deleteResult == undefined || deleteResult == null) {
        throw new Error(`No se pudo eliminar la categoria con id ${categoryId}. Posiblemente ya se ha eliminado`);
      }

      return deleteResult;
    } catch (error) {
      console.error(error);
      throw new Error("Error al eliminar una categoria");
    }
  }
}

export default CategoriasServices;