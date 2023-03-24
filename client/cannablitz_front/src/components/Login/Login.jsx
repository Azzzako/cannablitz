import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import imgLogo from '../../assets/CANNABLITZ.png'
import { Checkbox, FormControlLabel } from "@mui/material";
import './Login.css'

export const Login = () => {
    return (
        <div className="loggin-box">

            <div className="boxes">
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
                        className="text_box"
                        required
                        id="outlined-helperText"
                        label="Nombre"
                        variant="standard"
                        color="info"
                    />

                    <TextField
                        className="text_box"
                        required
                        id="outlined-required"
                        label="Apellido"
                        variant="standard"
                    />

                    <TextField
                        className="text_box"
                        required
                        id="outlined-required"
                        label="Email"
                        variant="standard"
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
                    <FormControlLabel
                        control={<Checkbox defaultChecked />} label="Confirmo que soy mayor de 18 anios" />
                </Box>

            </div>

        </div>
    )
}
