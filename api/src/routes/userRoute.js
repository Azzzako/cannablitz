const express = require('express')
const router = express.Router()
const  User  = require('../models/UserModel')

router.post('/', async (req, res) => {
    try {
        const { firstName, lastName, email } = req.body
        const newUser = await User.create({firstName, lastName, email})
        res.status(200).send(newUser)
        console.log('usuario creado');
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'RIP' })
    }
})

router.get('/', (req, res) => {
    try {
        const users = User.finAllUsers()
        res.status(200).json(users)
    } catch (error) {
        console.log(error);
    }
})

module.exports = router

