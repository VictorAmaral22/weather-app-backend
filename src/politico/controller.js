const { Politico } = require("./model");
const jwt = require("jsonwebtoken");
const { Mandato } = require("../mandato/model");
const { Partido } = require("../partido/model");

class PoliticoController {
  constructor() {}

  async create(req, res) {
    // INPUT
    const { cpf, name, foto, email, dataNascimento, cidade, estado, pais, partido, mandatoAtual } = req.body;

    // PROCESSAMENTO
    const user = await Politico.create({
      cpf, name, foto, email, dataNascimento, cidade, estado, pais, partido, mandatoAtual
    });

    // RESPOSTA
    return res.status(201).json(user);
  }

  async auth(req, res) {
    const { email, senha } = req.body;

    const user = await Politico.findOne({
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

  async list(req, res) {
    const users = await Politico.findAndCountAll();
    res.json(users);
  }

  async getById(req, res) {
    let { id } =req.params
    // id=parseFloat(id)
    const politico=await Politico.findByPk(id)
    if(!politico){
        throw {
            status:500,
            message:"Not Found"
        }
    }
    if(politico.partido){
      if(politico.mandatoAtual){
        let mandato =await Mandato.findByPk(politico.mandatoAtual)
        let partido =await Partido.findByPk(politico.partido)
        return res.status(201).json({politico, mandato, partido})
      }
    }
    return res.status(201).json({politico})
}
async update(req, res) {
  try{
      const { id }=req.params;
      console.log(req.body)
      await Politico.update(req.body,{where: { cpf:id }});
      return res.status(201).json({msg:"UPDATED"})
  } catch(err){
    console.log(err)
    return res.json({msg:"Err"})
  }
}
async delete(req, res) {
    // const {id:userId}=req.user
    const { id }=req.body;    
    const deleteId=await Politico.findByPk(id)
    await deleteId.destroy()
    return res.status(201).json({msg:"DELETED"});
}
}

module.exports = PoliticoController;
