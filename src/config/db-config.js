const { Sequelize } = require('sequelize');

const sequelizeCon = new Sequelize('postgres://qgwmtfcffpsjza:2b3a36735198f59e502f56cd378a229ec6476733718cb417b1a461583cef2fd9@ec2-52-71-23-11.compute-1.amazonaws.com:5432/d3nk0frsejod3r', {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
});

module.exports = { sequelizeCon };