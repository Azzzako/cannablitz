const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()
const User = require('../models/UserModel')
const nodemailer = require('nodemailer')
const dotenv = require('dotenv');
dotenv.config()


const transporter = nodemailer.createTransport({
    service: 'mailgun',
    auth: {
        user: process.env.MAILGUN_USERNAME,
        pass: process.env.MAILGUN_PASS
    }
})

router.post('/', async (req, res) => {
    try { 
        const { firstName, lastName, email, password } = req.body
        const emailInUse = await User.findOne({ where: { email: email } })
        if (emailInUse) {
            console.log('email ocupado papu');
            return res.status(400).json({ msg: 'email ocupado por otro usuario' })
        }


        const saltRounds = 10;
        const passwordCreate = await bcrypt.hash(password, saltRounds)
        const newUser = await User.create({ firstName, lastName, email, passwordCreate })
        res.status(201).json(newUser)
        console.log('usuario creado');

        const mailOptions = {
            from: 'awfkgaming@gmail.com',
            to: email, 
            subject: 'Bienvenido a Cannablitz',
            text: `Hola ${firstName}, acabas de registrarte en Cannablitz`
        }

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) console.log(error);
            else console.log('correo electronico enviado: ' + info.response);
        })


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
        const users = await User.findAllUsers()
        if (id) {
            userById = users.filter(user => user.id == id)
            res.status(200).json(userById)
        }
    } catch (error) {
        console.log(error);
    }
})

router.put('/:userId', async (req, res) => {
    try {
        const userId = req.params.userId
        const { firstName, lastName, email } = req.body;
        const updatedUser = await User.findOne({ where: { id: userId } })

        if (!updatedUser) {
            res.status(404).json({ msg: 'No existe el usuario con ese ID' })
        }

        updatedUser.firstName = firstName
        updatedUser.lastName = lastName
        updatedUser.email = email

        await updatedUser.save()

        res.status(200).json(updatedUser);
        console.log('usuario actualizado');

    } catch (error) {
        console.log(error)
    }
})

module.exports = router

