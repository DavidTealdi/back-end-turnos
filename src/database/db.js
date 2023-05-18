require('dotenv').config()
const { Sequelize } = require('sequelize')


const UserTurnos = require('../models/UserTurnos')
const Userlogin = require('../models/UserLogin')


const {USER, PASSWORD, HOST, PORT, DDB} = process.env

// Conexion a la base de datos local

const sequelize = new Sequelize(
    `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${DDB}`,
    {logging: false}
)

UserTurnos(sequelize);
Userlogin(sequelize)


module.exports = { ...sequelize.models, db: sequelize }