const { DataTypes, Model } = require('sequelize');

const { sequelizeCon } = require('../config/db-config');

class Politico extends Model {}
    
Politico.init({
    cpf: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    nome: DataTypes.STRING,
    foto: DataTypes.STRING,
    email: DataTypes.STRING,
    dataNascimento: DataTypes.DATE,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,
    pais: DataTypes.STRING,
    partido: DataTypes.INTEGER,
    mandatoAtual: DataTypes.INTEGER,
}, { 
    sequelize: sequelizeCon, 
    schema: 'public',
    modelName: 'politico'
});
sequelizeCon.sync({
    force: true
});


module.exports = { Politico };