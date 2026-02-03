import express from "express";
import UnitController from "../controllers/UnitController.js";

const router = express.Router();

router.post("/", UnitController.create);
router.put("/", UnitController.updateStatus);

export default router;
