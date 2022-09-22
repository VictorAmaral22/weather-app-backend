const {Usuario} = require('./model');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
//const { hashPassword } = require('../utils/passoword.js');
const {compare, hash, genSalt} = require('bcrypt')
class UsuariosController {

    constructor() {}

    async create(req, res) {
        // INPUT
        try {
            const {email, senha, name} = req.body;

            // PROCESSAMENTO
            const salt = await genSalt(8)
            const hashedpass = await hash(senha, salt)
            const user = await Usuario.create({email, senha: hashedpass, name});

            // RESPOSTA
            return res
                .status(201)
                .json(user);
        } catch (err) {
            res
                .status(400)
                .json({err})
        }

    }

    async auth(req, res) {
        try {
            const {email, senha} = req.body;
            const user = await Usuario.findOne({where: {
                    email
                }});

            if (!user) {
                return res
                    .status(404)
                    .json({msg: "Usuario não existe"});
            } else {
                console.log(user);
                let isAuth = await compare(senha, user.dataValues.senha)

                if (!isAuth) {
                    return res
                        .status(401)
                        .json({msg: "Email ou senha incorretos"});
                } else {
                    const meuJwt = jwt.sign(user.dataValues, 'SECRET NAO PODERIA ESTAR HARDCODED')
                    return res.json({token: meuJwt});
                }
            }
        } catch (error) {
            return res
                .status(400)
                .json({error});
        }
    }

    async list(req, res) {
        try {
            const users = await Usuario.findAndCountAll();
            res
                .status(200)
                .json(users);
        } catch (error) {
            res
                .status(400)
                .json({error});
        }
    }

    async getById(req, res) {
        try {
            let {id} = req.params
            id = parseFloat(id)
            const user = await Usuario.findByPk(id)

            if (!user) {
                throw {status: 404, message: "User Not Found"}
            }

            const {
                dataValues: {
                    name,
                    email,
                    createdAt,
                    updatedAt
                }
            } = user

            return res
                .status(200)
                .json({id, name, email, createdAt, updatedAt})
        } catch (error) {
            return res
                .status(error.status)
                .json({error});
        }
    }

    async update(req, res) {
        try {
            const {id} = req.user;
            const {name, password} = req.body;
            const updateObj = {};

            if (name) {
                updateObj.name = name
            }
            if (password) {
                // updateObj.password=await hashPassword(password)
            }
            let response = await Usuario.update(updateObj, {where: {
                    id
                }});

            return res
                .status(200)
                .json({msg: "UPDATED"})
        } catch (error) {
            return res
                .status(400)
                .json({error})
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.user;
            await Usuario.destroy({where: {
                    id
                }});

            res
                .status(200)
                .json({msg: 'DELETED'});
        } catch (error) {
            return res.json({error});
        }
    }
}

module.exports = UsuariosController;