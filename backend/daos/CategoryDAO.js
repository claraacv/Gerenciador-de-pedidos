import Category from "../models/category.js";

class CategoryDAO{
    async create(data){
        return await Category.create(data);
    }

    async getById(id){
        return await Category.findByPk(id);
    }

    async getAll(){
        return await Category.findAll();
    }

    async update(id, data){
        return await Category.update(data, {where: {id}});
    }

    async delete(id){
        return await Category.destroy({where:{id}});
    }
}

export default new CategoryDAO();