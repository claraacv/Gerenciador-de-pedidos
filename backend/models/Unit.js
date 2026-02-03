import { Sequelize } from "sequelize";
import db from "../infrastructure/connection.js";
import { Product } from "./Relations.js";

const Unit = db.define(
  "units",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    color: {
      type: Sequelize.STRING,
    },
    size: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    motive: {
      type: Sequelize.STRING,
    },
    id_product: {
      type: Sequelize.STRING,
      allowNull: false,
      references: {
        model: Product,
        key: "id",
      },
    },
  },
  {
    timestamps: false,
  },
);

export default Unit;
