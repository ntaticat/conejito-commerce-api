import { Router } from "express";
import multer from "multer";
import UploadsController from "../controllers/uploads.controller";

const storage = multer.diskStorage({
  destination: (req, file, callback: Function) => {
    callback(null, "./uploads/");
  },
  filename: (req, file, callback: Function) => {
    const newFileName = `${new Date().toISOString()}_${file.originalname}`;
    callback(null, newFileName);
  }
});

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5 // 5mb
  },
  fileFilter: (req, file, callback: Function) => {

    if(file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      callback(null, true);
      return;
    }
    const invalidFile = new Error("La imagen debe ser jpeg o png");
    callback(invalidFile, false);
  }
});

const uploadsController = new UploadsController();

const router = Router();

router.post("/image", upload.single("img"), uploadsController.postImage);
router.delete("/image", uploadsController.deleteImage);

export default router;