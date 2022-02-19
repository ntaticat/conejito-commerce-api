import { Response, Request } from "express";

import CategoriasServices from "../services/categorias.services";

const categoriasServices = new CategoriasServices();

class UploadsController {

  constructor() { }

  async postImage(req: Request, res: Response) {
    try {
      res.status(200).json({
        path: req.file?.path
      });
    } catch (error) {
      console.log("Error:", error);
      res.status(400).json({
        message: error
      });
    }
  }

  async deleteImage(req: Request, res: Response) {
    try {
      res.status(200).json({
      });
    } catch (error) {
      res.status(400).json({
        message: error
      });
    }
  }

}

export default UploadsController;