const express = require('express')
const cloudinary = require('cloudinary').v2
const multer = require('multer')
const product = express.Router()
const Product = require('../models/ProductModel')

// Configurar Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

const upload = multer({ dest: 'uploads/', storage: storage })

product.post('/', upload.single('image'), async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path)
        const { name, price, description } = req.body

        const newProduct = await Product.create({
            name,
            price,
            description,
            image: result.secure_url
        })

        res.status(200).json(newProduct)
        console.log(result);
    } catch (error) {
        console.log(error)
        res.status(500).json({ msj: 'Internal Server Error' })
    }
})

product.get('/', async(req, res) => {
    try {
        const products = await Product.findAllProducts()
        res.status(200).json(products)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})


module.exports = product
