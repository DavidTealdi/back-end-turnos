const{ DataTypes } = require('sequelize')

module.exports = (database) => {

    database.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        number: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: false
        },
        dia: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        hora: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false 
        }
    }, 
    {
        timestamps: false
    })
}

