import Category from "./Category.js";
import CategoryProduct from "./CategoryProduct.js";
import Product from "./Product.js";

Category.belongsToMany(Product, {
    through: CategoryProduct,
    foreignKey: "id_category",
    otherKey: "id_product"
});

Product.belongsToMany(Category, {
    through: CategoryProduct,
    foreignKey: "id_product",
    otherKey: "id_category"
});

export{
    Product,
    Category,
    CategoryProduct
}