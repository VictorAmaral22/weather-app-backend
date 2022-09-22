const {Mandato} = require('./model');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const {hashPassword} = require('../utils/passoword.js');

class MandatoController {

    constructor() {}

    async create(req, res) {
        // INPUT
        const {
            id_politico,
            numero,
            cidade,
            estado,
            pais,
            cargo,
            inicio,
            final
        } = req.body;

        // PROCESSAMENTO
        const user = await Mandato.create({            
            id_politico,
            numero,
            cidade,
            estado,
            pais,
            cargo,
            inicio,
            final});

        // RESPOSTA
        return res
            .status(201)
            .json(user);

    }

    async list(req, res) {
        const mandatos = await Mandato.findAndCountAll();
        res.json(mandatos);
    }

    async getById(req, res) {
        let {id} = req.params
        const Mandato = await Mandato.findByPk(id)
        if (!Mandato) {
            throw {status: 400, message: "Mandato Not Found"}
        }
        return res
            .status(200)
            .json({Mandato})
    }
    async update(req, res) {
        const {id} = req.params;
        await Mandato.update(req.body, {where: {
                id
            }});
        return res
            .status(200)
            .json({msg: "UPDATED"})
    }
    async delete(req, res) {
        const {id} = req.params;
        await Mandato.destroy({where: {
                id
            }});
        res.json({message: 'DELETED'});
    }
}

module.exports = MandatoController;