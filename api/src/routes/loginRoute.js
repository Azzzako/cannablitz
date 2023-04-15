const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/UserModel')
const login = express.Router()

login.post('/', async (req, res) => {
    try {
        const { email, password } = req.body
        const userLogin = await User.findOne({ where: { email: email } })
        if (!userLogin) {
            res.status(401).json({ msg: 'Usuario invalidos' })
        }
        
        bcrypt.compare(password, userLogin.passwordCreate, (err, result) => {
            if (err) {
                return res.status(500).json({ msg: 'Internal Server Error' })
            }

            if (!result) {
                console.log('usuario o contrasena inv')
                return res.status(401).json({ msg: 'Contrasena invalidos' });
            }

            res.status(200).json({
                email: userLogin.email,
                name: `${userLogin.firstName} ${userLogin.lastName}`, 
                role: userLogin.role
            })
            return console.log('logeado papu')

        })
    } catch (error) {
        console.log(error);
    }
})


module.exports = login
