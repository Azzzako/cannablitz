import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import imgLogo from '../../assets/CANNABLITZ.png'
import { Button } from "@mui/material";
import './Login.css'



export const Login = () => {

    return (
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
            <h1 className="title">Ingresar</h1>
            <TextField
                className="text_box"
                required
                id="outlined-required"
                label="Correo electronico"
                variant="standard"
                color="info"
                autoComplete="email"
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

            <Button variant="contained" color="success" style={{ margin: '0 auto 10px', width: '37ch' }}>Entrar</Button>
        </Box>
    )
}
