const { Politico } = require("./model");
const jwt = require("jsonwebtoken");

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
    id=parseFloat(id)
    const politico=await Politico.findByPk(id)
    if(!politico){
        throw {
            status:HTTP_STATUS.NOT_FOUND,
            message:"Not Found"
        }
    }
    return res.status(HTTP_STATUS.OK).json({politico})
}
async update(req, res) {
  try{
      const { id }=req.user;
      console.log(req.body)
      await Users.update(req.body,{where: { id }});
      return res.status(HTTP_STATUS.OK).json({msg:"UPDATED"})
  } catch(err){
    return res.json({msg:"Err"})
  }
}
async delete(req, res) {
    // const {id:userId}=req.user
    const { id }=req.body;    
    const foundMusic=await Musics.findByPk(id)
    await foundMusic.destroy()
    return res.status(HTTP_STATUS.OK).json({msg:"DELETED"});
}
}

module.exports = PoliticoController;
