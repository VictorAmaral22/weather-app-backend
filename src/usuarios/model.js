const {DataTypes, Model} = require('sequelize');

const {sequelizeCon} = require('../config/db-config');

class Usuario extends Model {}

Usuario.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    name: DataTypes.STRING,
    senha: DataTypes.STRING
}, {
    sequelize: sequelizeCon,
    schema: 'public',
    modelName: 'usuario'
});

module.exports = {
    Usuario
};