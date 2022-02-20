import { Router } from "express";
import ProductosController from "../controllers/productos.controller";

const productosController = new ProductosController();

const router = Router();

router.get("/", productosController.getProductos);
router.get("/:id", productosController.getProducto);
router.post("/", productosController.postProducto);
router.put("/:id", productosController.putProducto);
router.delete("/:id", productosController.deleteProducto);

router.post("/:productoId/precios", productosController.postProductoPrecio);
router.delete("/:productoId/precios/:precioId", productosController.deleteProductoPrecio);

export default router;