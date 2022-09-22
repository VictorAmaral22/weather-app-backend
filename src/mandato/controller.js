const { Mandato } = require('./model');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { hashPassword } = require('../utils/passoword.js');

class MandatoController {

    constructor() {
        
    }

    async create(req, res) {
        // INPUT
        const {  id_politico,
            numero,
            cidade,
            estado,
            pais,
            cargo,
            inicio,
            final } = req.body;

        // PROCESSAMENTO
        const hashedpass=await hashPassword(password)
        const user = await Mandato.create({
            email, senha:hashedpass, nome
        });

        // RESPOSTA
        return res.status(201).json(user);

    }

    async auth(req, res) {
        const { email, senha } = req.body;

        const user = await Mandato.findOne({
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
        const users = await Mandato.findAndCountAll();
        res.json(users);
    }

    async getById(req, res) {
        let { id } =req.params
        id=parseFloat(id)
        const user=await Mandato.findByPk(id)
        if(!user){
            throw {
                status:HTTP_STATUS.NOT_FOUND,
                message:"User Not Found"
            }
        }
        const {dataValues:{name,email,createdAt,updatedAt}} = user
        return res.status(HTTP_STATUS.OK).json({id,name,email,createdAt,updatedAt})
    }
    async update(req, res) {
        const { id }=req.user;
        const {name,password}=req.body;
        const updateObj={};
        if(name){
            updateObj.name=name
        }
        if(password){
            updateObj.password=await hashPassword(password)
        }
        await Users.update(updateObj,{where: { id }});
        return res.status(HTTP_STATUS.OK).json({msg:"UPDATED"})
    }
    async delete(req, res) {
        const { id }=req.user;
        await Mandato.destroy({where:{id}});
        res.json({ message: 'DELETED'});
    }
}


module.exports = MandatoController;