import Unit from "../models/Unit.js";

class UnitDAO {
  async create(data) {
    return await Unit.create(data);
  }

  async delete(id) {
    return await Unit.destroy({ where: { id } });
  }

  async getByColorProductSize(color, id_product, size) {
    const where = { id_product };
    if (color) where.color = color;
    if (size) where.size = size;
    return await Unit.getAll({ where });
  }

  async update(id, data) {
    return await Unit.update(data, { where: { id } });
  }
}

export default new UnitDAO();
