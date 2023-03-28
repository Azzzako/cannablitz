import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import imgLogo from '../../assets/CANNABLITZ.png'
import { Button, Checkbox, FormControlLabel } from "@mui/material";
import './Login.css'
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, saveNewUser } from "../../redux/Actions/actions";
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Loader } from "../Loader/Loader";


export const Register = () => {

    const [isChecked, setIsChecked] = useState(false)
    const [loader, setLoader] = useState(false)
    const userList = useSelector(state => state.userList)
    const [newUser, setNewUser] = useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(() => {
        dispatch(getAllUsers())
    }, [])


    const newUserRegister = async (e) => {
        e.preventDefault();

        if (!newUser.firstName || !newUser.lastName || !newUser.email || !newUser.password) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Llena todos los campos'
            });
        } else {
            // Expresión regular para validar correo electrónico
            var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            if (!emailRegex.test(newUser.email)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'La dirección de correo electrónico no es válida'
                });
            } else {

                const emailExist = userList.find((user) => user.email === newUser.email)
                if (emailExist) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Este correo electrónico ya está en uso'
                    });
                } else {
                    dispatch(saveNewUser(newUser));
                    setNewUser({
                        firstName: '',
                        lastName: '',
                        email: '',
                        password: ''
                    });
                    Swal.fire({
                        icon: 'success',
                        title: 'Éxito',
                        text: 'El usuario se registró correctamente'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            setLoader(true)
                            setTimeout(() => {
                                setLoader(false)
                                navigate('/home')
                            }, 3000)
                        }
                    })
                }

            }
        }
    };


    const infoUser = (e) => {
        e.preventDefault()
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }


    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 3, width: '35ch' },
                display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
            }}
            noValidate
            autoComplete="off"
        >

            <div className="img_container">
                <img src={imgLogo} alt={imgLogo} />
            </div>
            <h1 className="title">Crear cuenta</h1>
            <TextField
                onChange={infoUser}
                className="text_box"
                required
                id="outlined-helperText"
                label="Nombre"
                autoComplete="firstName"
                variant="standard"
                color="info"
                name="firstName"
                value={newUser.firstName}
            />

            <TextField
                onChange={infoUser}
                className="text_box"
                required
                autoComplete="lastName"
                label="Apellido"
                variant="standard"
                name="lastName"
                value={newUser.lastName}
            />

            <TextField
                onChange={infoUser}
                className="text_box"
                required
                label="Email"
                variant="standard"
                name="email"
                value={newUser.email}
                autoComplete="email"
            />

            <TextField
                onChange={infoUser}
                className="text_box"
                required
                label="Contraseña"
                type="password"
                autoComplete="password"
                variant="standard"
                name="password"
                value={newUser.password}
            />
            <FormControlLabel
                control={<Checkbox defaultChecked={isChecked} onChange={() => setIsChecked(!isChecked)} />} label="Confirmo que soy mayor de 18 años" />
            <Button variant="contained" color="success" style={{ margin: '0 auto 10px', width: '37ch' }}
                onClick={newUserRegister}
                disabled={!isChecked}
            >
                Crear cuenta
            </Button>
           {loader ? <div className="loader_container"><Loader/></div> : null }
        </Box>
    )
}
