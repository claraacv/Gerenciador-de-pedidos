import UnitDAO from "../daos/UnitDAO.js";

class UnitController {
  async create(req, res) {
    try {
      const { quantity, color, size, id_product } = req.body;
      const status = "Disponível";
      for (let index = 0; index < quantity; index++) {
        const unit = await UnitDAO.create({ color, size, id_product, status });
      }
      return res.status(201).json({ message: "It was a success" });
    } catch (error) {
      return res.status(400).json({ message: "There was an error " + error });
    }
  }

  async updateStatus(req, res) {
    try {
      const { color, size, id_product, quantity, motive } = req.body;
      const units = await UnitDAO.getByColorProductSize(
        color,
        id_product,
        size,
      );
      for (let index = 0; index < quantity; index++) {
        const status = "Indisponível";
        const updatedStatus = await UnitDAO.update(units[index].id, {
          color,
          size,
          id_product,
          status,
          motive,
        });
      }
      return res.status(200).json({ message: "It was a success" });
    } catch (error) {
      return res.status(400).json({ message: "There was an error " + error });
    }
  }
}

export default new UnitController();
