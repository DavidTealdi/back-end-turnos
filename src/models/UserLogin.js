const{ DataTypes } = require('sequelize')


module.exports = (database) => {

    database.define('Login', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        }
    },
    {
        timestamps: false
    })
}
