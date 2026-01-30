import {Category, Product} from "../models/Relations.js"

class ProductDAO{
    async create(data){
        return await Product.create(data);
    }

    async getAll(){
        return await Product.findAll({
            include: {
                model: Category
            }
        });
    }

    async getByPk(id){
        return await Product.findByPk(id, {
            include: {
                model: Category
            }
        });
    }

    async update(id, data){
        return await Product.update(data, {where: {id}});
    }

    async delete(id){
        return await Product.destroy({where: {id}});
    }
}

export default new ProductDAO();