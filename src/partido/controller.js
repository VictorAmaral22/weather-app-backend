const {Partido} = require("./model");
const jwt = require("jsonwebtoken");

class PartidoController {
    constructor() {}

    async create(req, res) {
        try {
            const {numero, name, logo} = req.body;
            const user = await Partido.create({numero, name, logo});

            return res
                .status(201)
                .json(user);
        } catch (error) {
            return res
                .status(400)
                .json({error})
        }
    }

    async list(req, res) {
        try {
            const partidos = await Partido.findAndCountAll();
            res
                .status(200)
                .json(partidos);
        } catch (error) {
            return res
                .status(400)
                .json({error})
        }
    }

    async getById(req, res) {
        try {
            let {id} = req.params;
            id = parseFloat(id);
            const partido = await Partido.findByPk(id);
            if (!partido) {
                return res
                    .status(404)
                    .json({msg: "Partido não encontrado"})
            }
            return res
                .status(200)
                .json({partido});
        } catch (error) {
            return res
                .status(400)
                .json({error})
        }
    }

    async update(req, res) {
        try {
            const {id} = req.params;
            await Partido.update(req.body, {where: {
                    id
                }});
            return res
                .status(200)
                .json({msg: "UPDATED"});
        } catch (error) {
            return res
                .status(400)
                .json({error})
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params;
            await Partido.destroy({where: {
                    id
                }});
            res
                .status(200)
                .json({msg: "DELETED"});
        } catch (error) {
            return res
                .status(400)
                .json({error})
        }
    }
}

module.exports = PartidoController;
