const { DataTypes, Model } = require('sequelize');

const { sequelizeCon } = require('../config/db-config');

class Partido extends Model {}
    
Partido.init({
    numero: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nome: DataTypes.STRING,
    logo: DataTypes.STRING,
}, { 
    sequelize: sequelizeCon, 
    schema: 'public',
    modelName: 'partido'
});

module.exports = { Partido };