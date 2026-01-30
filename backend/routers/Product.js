import express from "express";
import ProductController from "../controllers/ProductController.js";

const router = express.Router();

router.get("/", ProductController.getAll);
router.get("/:id", ProductController.getByPk);
router.post("/", ProductController.create);
router.put("/:id", ProductController.update);
router.delete("/:id", ProductController.delete);

export default router;