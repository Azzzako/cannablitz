import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import imgLogo from '../../assets/CANNABLITZ.png'
import { Button, Checkbox, FormControlLabel, Stack } from "@mui/material";
import './Login.css'
import { useDispatch } from "react-redux";
import { saveNewUser } from "../../redux/Actions/actions";
import Swal from 'sweetalert2'

export const Login = () => {

    const [componentView, setComponentView] = useState('login')
    const [newUser, setNewUser] = useState({})
    const [isChecked, setIsChecked] = useState(false)
    const dispatch = useDispatch()

    const newUserRegister = (e) => {
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
              });
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

    const setLogin = () => {
        setComponentView('login')
    }

    const setRegiser = () => {
        setComponentView('register')
    }

    console.log(newUser);
    return (
        <div className="loggin-box">

            <div className="boxes">
                {componentView === 'login' ? <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 3, width: '35ch' },
                        display: 'grid', placeItems: 'center'
                    }}
                    noValidate
                    autoComplete="off"
                >

                    <div className="img_container">
                        <img src={imgLogo} alt={imgLogo} />
                    </div>
                    <h1 className="title">Ingresar</h1>
                    <TextField
                        className="text_box"
                        required
                        id="outlined-helperText"
                        label="Correo electronico"
                        variant="standard"
                        color="info"
                    />


                    <TextField
                        className="text_box"
                        required
                        id="standard-password-input"
                        label="Contrasena"
                        type="password"
                        autoComplete="current-password"
                        variant="standard"
                    />
                </Box>

                    :

                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 3, width: '35ch' },
                            display: 'grid', placeItems: 'center'
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
                            variant="standard"
                            color="info"
                            name="firstName"
                            value={newUser.firstName}
                        />

                        <TextField
                            onChange={infoUser}
                            className="text_box"
                            required
                            id="outlined-required"
                            label="Apellido"
                            variant="standard"
                            name="lastName"
                            value={newUser.lastName}
                        />

                        <TextField
                            onChange={infoUser}
                            className="text_box"
                            required
                            id="outlined-required"
                            label="Email"
                            variant="standard"
                            name="email"
                            value={newUser.email}
                            
                        />

                        <TextField
                            onChange={infoUser}
                            className="text_box"
                            required
                            id="standard-password-input"
                            label="Contrasena"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                            name="password"
                            value={newUser.password}
                            
                        />
                        <FormControlLabel
                            control={<Checkbox defaultChecked={isChecked} onChange={() => setIsChecked(!isChecked)}/>} label="Confirmo que soy mayor de 18 anios" />
                        <Button variant="contained" color="success" style={{margin:'0 auto 10px'}}
                        onClick={newUserRegister}
                        disabled={!isChecked}
                        >
                            Crear cuenta
                        </Button>
                    </Box>

                }




                <Stack direction="row" spacing={2}>
                    <Button variant="contained" onClick={setRegiser}>
                        Sign In
                    </Button>
                    <Button variant="contained" onClick={setLogin}>
                        Log In
                    </Button>
                </Stack>
            </div>
        </div>
    )
}
