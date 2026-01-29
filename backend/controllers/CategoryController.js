import CategoryDAO from "../daos/CategoryDAO.js";

class CategoryController{
    async create(req, res){
        try{
            const {name} = req.body;
            const category = await CategoryDAO.create({name});
            return res.status(201).json(category);
        } catch(error){
            return res.status(400).json({message: "There was an error: " + error});
        }
    }

    async getById(req, res){
        try{
            const {id} = req.params;
            const category = await CategoryDAO.getById(id);
            return res.status(200).json(category);
        } catch(error){
            return res.status(400).json({message: "There was an error: " + error});
        }
    }

    async getAll(req, res){
        try{
            const categories = await CategoryDAO.getAll();
            return res.status(200).json(categories);
        } catch(error){
            return res.status(400).json({message: "There was an error: " + error});
        }
    }
}

export default new CategoryController();