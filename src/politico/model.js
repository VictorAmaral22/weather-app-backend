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
    cidade: DataTypes.NUMBER,
    estado: DataTypes.NUMBER,
    pais: DataTypes.NUMBER,
    partido: DataTypes.NUMBER,
    mandatoAtual: DataTypes.NUMBER,
}, { 
    sequelize: sequelizeCon, 
    schema: 'public',
    modelName: 'politico'
});

module.exports = { Politico };