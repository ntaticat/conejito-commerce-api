import { Response, Request } from "express";
import { ICategory } from "../interfaces/categorias.interfaces";
import CategoriasServices from "../services/categorias.services";

const categoriasServices = new CategoriasServices();

class CategoriasController {

  constructor() { }

  async postCategoria(req: Request, res: Response) {
    try {
      const categoria: ICategory = req.body.categoria
      const dbCategoria = await categoriasServices.createCategoria(categoria);
      res.status(200).json({
        categoria: dbCategoria
      });
    } catch (error) {
      console.log("Error:", error);
      res.status(400).json({
        message: error
      });
    }
  }

  async putCategoria(req: Request, res: Response) {
    try {
      const categoriaId: string = req.params.id; 
      const categoria: ICategory = req.body.categoria;
      const updateResult = await categoriasServices.updateCategoria(categoriaId, categoria);
      res.status(200).json({
        categoria: updateResult
      });
    } catch (error) {
      res.status(400).json({
        message: error
      });
    }
  }

  async deleteCategoria(req: Request, res: Response) {
    try {
      const categoriaId: string = req.params.id; 
      const deleteResult = await categoriasServices.deleteCategoria(categoriaId);
      res.status(200).json({
        categoria: deleteResult
      });
    } catch (error) {
      res.status(400).json({
        message: error
      });
    }
  }

}

export default CategoriasController;