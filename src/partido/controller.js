const { Partido } = require("./model");
const jwt = require("jsonwebtoken");

class PartidoController {
  constructor() {}

  async create(req, res) {
    // INPUT
    const { numero, nome, logo } = req.body;

    // PROCESSAMENTO
    const user = await Partido.create({
      numero,
      nome,
      logo,
    });

    // RESPOSTA
    return res.status(201).json(user);
  }
  async list(req, res) {
    const partidos = await Partido.findAndCountAll();
    res.json(partidos);
  }

  async auth(req, res) {
    const { email, senha } = req.body;

    const user = await Usuario.findOne({
      where: {
        email,
        senha,
      },
    });

    if (!user) {
      return res.status(400).json({ msg: "USER AND PASS NOT MATCH" });
    }
    console.log(user);
    const meuJwt = jwt.sign(
      user.dataValues,
      "SECRET NAO PODERIA ESTAR HARDCODED"
    );
    return res.json(meuJwt);
  }

  async getById(req, res) {
    let { id } = req.params;
    id = parseFloat(id);
    const partido = await Partido.findByPk(id);
    if (!partido) {
      throw {
        status: HTTP_STATUS.NOT_FOUND,
        message: "Not Found",
      };
    }
    return res
      .status(HTTP_STATUS.OK)
      .json({ partido });
  }
  async update(req, res) {
    const { id } = req.params;
    const { nome, logo } = req.body;
    const updateObj = {};
    if (nome) {
      updateObj.nome = nome;
    }
    if (logo) {
      updateObj.logo = logo;
    }
    await Partido.update(updateObj, { where: { id } });
    return res.status(HTTP_STATUS.OK).json({ msg: "UPDATED" });
  }
  async delete(req, res) {
    const { number } = req.params;
    await Partido.destroy({ where: { number } });
    res.json({ message: "DELETED" });
  }
}

module.exports = PartidoController;
