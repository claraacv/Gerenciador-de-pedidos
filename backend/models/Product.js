import { Sequelize } from "sequelize";
import db from "../infrastructure/connection.js";

const Product = db.define("products", {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name:{
        type:Sequelize.STRING,
        allowNull: false
    },
    description:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    code:{
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
    },
    price:{
        type:Sequelize.FLOAT,
        allowNull: false
    }
}, {
    timestamps: false
});

export default Product;