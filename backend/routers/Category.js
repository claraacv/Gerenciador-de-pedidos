import express from "express";
import CategoryController from "../controllers/CategoryController.js";

const Router = express.Router();

Router.get("/:id", CategoryController.getById);
Router.get("/", CategoryController.getAll);
Router.post("/", CategoryController.create);
Router.put("/:id", CategoryController.update);
Router.delete("/:id", CategoryController.delete);

export default Router;