import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import imgLogo from '../../assets/CANNABLITZ.png'
import { Button } from "@mui/material";
import './Login.css'
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/Actions/authActions";
import { useNavigate } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import Swal from "sweetalert2";


export const Login = () => {

    const [loginUser, setLoginUser] = useState({})
    const [loader, setLoader] = useState(false)
    const userLoged = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onHandleLoginUser = (e) => {
        e.preventDefault()
        setLoginUser({
            ...loginUser,
            [e.target.name]: e.target.value
        })
    }



    useEffect(() => {
        if (userLoged.isLoggedIn) {
            setLoader(true)
            setTimeout(() => {
                setLoader(false)
                navigate('/')
            }, 2000)
        }
        if (userLoged.error) {
            setLoader(true)
            setTimeout(() => {
                setLoader(false)
                Swal.fire({
                    icon: 'error',
                    title: 'Usuario o contrasena incorrectos',
                    text: 'Opps...',
                })
            }, 2000)
        }
    }, [userLoged])

    const tryLogin = (e) => {
        e.preventDefault()
        dispatch(login(loginUser))
    }



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
                name="email"
                value={loginUser.email}
                onChange={onHandleLoginUser}
            />


            <TextField
                className="text_box"
                required
                id="standard-password-input"
                label="Contrasena"
                type="password"
                autoComplete="current-password"
                variant="standard"
                value={loginUser.password}
                name="password"
                onChange={onHandleLoginUser}
            />

            <Button variant="contained" color="success" style={{ margin: '0 auto 10px', width: '37ch' }}
                onClick={tryLogin}
            >Entrar</Button>
            {loader ? <div className="loader_container"><Loader /></div> : null}
        </Box>
    )
}

