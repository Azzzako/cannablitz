const { DataTypes } = require('sequelize')
const sequelize = require('../database')

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

Product.findAllProducts = async () => {
    return await Product.findAll()
}

module.exports = Product
