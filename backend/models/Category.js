import Sequelize from "sequelize";
import db from "../infrastructure/connection.js";

const Category = db.define("categories", {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

export default Category;