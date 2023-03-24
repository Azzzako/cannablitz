import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import imgLogo from '../../assets/CANNABLITZ.png'
import { Button, Stack } from "@mui/material";
import './Login.css'
import { Register } from "./Register";
import { Login } from "./Login";

export const LoginRegScreen = () => {

    const [componentView, setComponentView] = useState({
        type: 'login',
        disabledLogin: false,
        disabledRegister: true
    })

    const setLogin = () => {
        setComponentView({
            type: 'login',
            disabledLogin: false,
            disabledRegister: true
        })
    }

    const setRegiser = () => {
        setComponentView({
            type: 'register',
            disabledLogin: true,
            disabledRegister: false
        })
    }



    console.log(componentView);
    return (
        <div className="loggin-box">

            <div className="boxes">
                {componentView.type === 'login'

                    ?

                    <Login />

                    :

                    <Register
                        setComponentView={setComponentView}
                    />

                }




                <Stack direction="row" spacing={2} style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
                    <Button variant="contained" onClick={setRegiser} className='log_btn' disabled={componentView.disabledLogin}>
                        Registrarse
                    </Button>
                    <Button variant="contained" onClick={setLogin} className='log_btn' disabled={componentView.disabledRegister}>
                        Ingresar
                    </Button>
                </Stack>
            </div>
        </div>
    )
}
