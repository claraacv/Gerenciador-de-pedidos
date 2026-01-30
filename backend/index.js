import express from "express";
import CategoryRouter from "./routers/Category.js";
import ProductRouter from "./routers/Product.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true }));

app.use("/categories", CategoryRouter);
app.use("/products", ProductRouter);

app.listen(8888, () => {
  console.log("Server running on port 8888");
});
