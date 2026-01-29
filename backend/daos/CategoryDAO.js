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
}

export default new CategoryDAO();