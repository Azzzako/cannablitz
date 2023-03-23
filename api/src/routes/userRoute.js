const express = require('express')
const router = express.Router()
const User = require('../models/UserModel')

router.post('/', async (req, res) => {
    try {
        const { firstName, lastName, email } = req.body
        const newUser = await User.create({ firstName, lastName, email })
        res.status(201).json(newUser)
        console.log('usuario creado');
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'RIP' })
    }
})

router.get('/', async (req, res) => {
    try {
        const users = await User.findAllUsers()
        res.status(201).json(users)
    } catch (error) {
        console.log(error);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const users =  await User.findAllUsers()
        if (id) {
            userById = users.filter(user => user.id == id)
            res.status(200).json(userById)
        }
    } catch (error) {
        console.log(error);
    }
})

module.exports = router

