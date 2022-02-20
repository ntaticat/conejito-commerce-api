import { ICategory } from "../interfaces/categorias.interfaces";
import { categoryModel } from "../models/categorias.model";
import { ICategoriasService } from "./services.interfaces";

class CategoriasServices implements ICategoriasService {
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

  async getCategoriaById(categoryId: string) {
    try {
      const dbCategory = await categoryModel.findById(categoryId).populate("products").exec();

      if (dbCategory == undefined || dbCategory == null) {
        throw new Error(`No se pudo obtener la categoria con id ${categoryId}`);
      }

      return dbCategory;
    } catch (error) {
      console.error(error);
      throw new Error("Error al obtener una categoria");
    }
  }

  async getCategorias() {
    try {
      const dbCategories = await categoryModel.find();
      return dbCategories;
    } catch (error) {
      console.error(error);
      throw new Error("Error al obtener todas categorias");
    }
  }
}

export default CategoriasServices;