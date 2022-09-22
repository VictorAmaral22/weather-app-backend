const {DataTypes, Model} = require('sequelize');

const {sequelizeCon} = require('../config/db-config');
class Mandato extends Model {}

Mandato.init({
    id_politico: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,
    pais: DataTypes.STRING,
    cargo: DataTypes.STRING,
    inicio: DataTypes.DATE,
    final: DataTypes.DATE
}, {
    sequelize: sequelizeCon,
    schema: 'public',
    modelName: 'mandato'
});

module.exports = {
    Mandato
};