const { DataTypes } = require('sequelize')
const sequelize = require('../database')


const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    passwordCreate: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

User.findAllUsers = async () => {
    return await User.findAll()
}

module.exports = User

