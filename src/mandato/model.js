const { DataTypes, Model } = require('sequelize');

const { sequelizeCon } = require('../config/db-config');
const { Politico } = require('../politico/model');
const { Cargo } = require('./cargo-model');
class Mandato extends Model {}
    
Mandato.init({
    id_politico: DataTypes.STRING,
    cidade: DataTypes.NUMBER,
    estado: DataTypes.NUMBER,
    pais: DataTypes.NUMBER,
    cargo: DataTypes.NUMBER,
    inicio: DataTypes.DATE,
    final: DataTypes.DATE,
}, { 
    sequelize: sequelizeCon, 
    schema: 'public',
    modelName: 'mandato'
});

Mandato.belongsTo(Politico,{
    foreignKey:'id_politico'
})

Politico.hasMany(Mandato,{
    foreignKey:'cpf'
})

Cargo.belongsToMany(Mandato)
Mandato.hasOne(Cargo)

module.exports = { Mandato };