const { Partido } = require("./model");
const jwt = require("jsonwebtoken");

class PartidoController {
  constructor() {}

  async create(req, res) {
    // INPUT
    const { numero, name, logo } = req.body;

    // PROCESSAMENTO
    const user = await Partido.create({
      numero,
      name,
      logo,
    });

    // RESPOSTA
    return res.status(201).json(user);
  }
  async list(req, res) {
    const partidos = await Partido.findAndCountAll();
    res.json(partidos);
  }

  async getById(req, res) {
    let { id } = req.params;
    id = parseFloat(id);
    const partido = await Partido.findByPk(id);
    if (!partido) {
      throw {
        status: 400,
        message: "Not Found",
      };
    }
    return res
      .status(200)
      .json({ partido });
  }
  async update(req, res) {
    const { id } = req.params;
    await Partido.update(req.body, { where: { id } });
    return res.status(200).json({ msg: "UPDATED" });
  }
  async delete(req, res) {
    const { id } = req.params;
    await Partido.destroy({ where: { id } });
    res.json({ message: "DELETED" });
  }
}

module.exports = PartidoController;
