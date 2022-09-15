const { DataTypes, Model } = require('sequelize');

const { sequelizeCon } = require('../config/db-config');

class Cargo extends Model {}
    
Cargo.init({
    nome: DataTypes.STRING,
}, { 
    sequelize: sequelizeCon, 
    schema: 'public',
    modelName: 'cargo'
});

module.exports = { Cargo };