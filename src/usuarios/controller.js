const { Usuario } = require('./model');
const { Resposta } = require('./repostas-model')
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { Exercicio } = require('../exercicios/model');

class UsuariosController {

    constructor() {
        
    }

    async create(req, res) {
        // INPUT
        const { email, senha, nome } = req.body;

        // PROCESSAMENTO
        const user = await Usuario.create({
            email, senha, nome
        });

        // RESPOSTA
        return res.status(201).json(user);

    }

    async auth(req, res) {
        const { email, senha } = req.body;

        const user = await Usuario.findOne({
            where: {
                email, senha
            }
        });

        if (!user) {
            return res.status(400).json({ msg: "USER AND PASS NOT MATCH"});
        }
        console.log(user);
        const meuJwt = jwt.sign(user.dataValues, 'SECRET NAO PODERIA ESTAR HARDCODED')
        return res.json(meuJwt);
    }

    async list(req, res) {
        const users = await Usuario.findAndCountAll();
        res.json(users);
    }

    async profile(req, res) {
        let email = ''
        const user = await Usuario.findOne({
            where: {
                email
            }
        });
        res.json({ user: user});
    }
    async getProfile(req, res) {
        const exercises = await Exercicio.findAndCountAll();
        res.json({ exercises: exercises});
    }
}


module.exports = UsuariosController;