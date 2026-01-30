import CategoryProductDAO from "../daos/CategoryProductDAO.js";
import ProductDAO from "../daos/ProductDAO.js";
import CategoryProduct from "../models/CategoryProduct.js";

class ProductController{
    async create(req, res){
        try{
            const {name, description, code, price, idsCategories} = req.body;

            if(!name || !description || !code || !price){
                return res.status(400).json({message: "There is missing data"});
            }

            const product = await ProductDAO.create({name, description, code, price});
            const product_category = await CategoryProductDAO.create(product.id, idsCategories);
            return res.status(201).json(product);
        } catch(error){
            return res.status(400).json({message: "There was an error while creating the product: " + error})
        }
    }

    async getAll(req, res){
        try{
            const products = await ProductDAO.getAll();
            return res.status(200).json(products);
        } catch(error){
            return res.status(400).json({message: "There was an error while getting the products: " + error});
        }
    }

    async getByPk(req, res){
        try{
            const {id} = req.params;

            const product = await ProductDAO.getByPk(id);
            return res.status(200).json(product);
        } catch(error){
            return res.status(400).json({message: "There was an error while getting the product: " + error});
        }
    }

    async update(req, res){
        try{
            const { id } = req.params;
            const { name, description, code, price, idsCategories } = req.body;

            if(!name || !description || !code || !price){
                return res.status(400).json({message: "There is missing data"});
            }

            const categories_products = await CategoryProductDAO.getCategoryPerProduct(id);
            const currentIds = categories_products.map(c => c.id_category);

            const toAdd = idsCategories.filter(idC => !currentIds.includes(idC));
            const toRemove = currentIds.filter(idC => !idsCategories.includes(idC));

            await ProductDAO.update(id, { name, description, code, price });

            if (toAdd.length > 0) {
                await CategoryProductDAO.create(id, toAdd);
            }

            await Promise.all(
                toRemove.map(idCategory =>
                    CategoryProductDAO.deleteByProductAndCategory(id, idCategory)
                )
            );

            return res.status(200).json({ message: "Product updated successfully" });

        } catch(error){
            return res.status(400).json({message: "There was an error while updating the product: " + error});
        }
    }


    async delete(req, res){
        try{
            const {id} = req.params;

            const categories = await CategoryProductDAO.getCategoryPerProduct(id);

            categories.map( async (c) => {
                const deletedCategoryProduct = await CategoryProductDAO.delete(c.id);
            })
            const deletedProduct = await ProductDAO.delete(id);
            return res.status(200).json(deletedProduct);
        } catch(error){
            return res.status(400).json({message: "There was an error while deleting the product: " + error});
        }
    }
}

export default new ProductController();