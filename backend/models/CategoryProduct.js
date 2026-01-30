import { Sequelize } from "sequelize";
import db from "../infrastructure/connection.js";
import Category from "./Category.js";
import Product from "./Product.js";

const CategoryProduct = db.define("categories_products", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    id_category: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
            model: Category,
            key: "id"
        }
    },
    id_product:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
            model: Product,
            key: "id"
        }
    }
}, {
    timestamps: false
});

export default CategoryProduct;