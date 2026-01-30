import {CategoryProduct} from "../models/Relations.js";

class CategoryProductDAO{
    async create(idP, idsC){
        const categories_products = idsC.map((idC) => ({
            id_category: idC,
            id_product: idP
        }));
        return await CategoryProduct.bulkCreate(categories_products);
    }

    async delete(id){
        return await CategoryProduct.destroy({where: {id}});
    }

    async deleteByProductAndCategory(idP, idC){
        return await CategoryProduct.destroy({
            where: {
                id_product: idP,
                id_category: idC
            }
        });
    }

    async getCategoryPerProduct(id){
        return await CategoryProduct.findAll({
            where: {
                id_product : id
            }
        });
    }
}

export default new CategoryProductDAO();