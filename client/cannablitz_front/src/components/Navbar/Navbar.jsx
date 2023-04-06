import React, { useEffect, useState } from "react";
import './Navbar.css'
import imgLogo from '../../assets/CANNABLITZ.png'
import { useDispatch } from "react-redux";
import { logout } from "../../redux/Actions/authActions";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from 'react-icons/fi'
import { FiUser } from 'react-icons/fi'

export const Navbar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userLoged = localStorage.getItem('authState')
    const [user, setUser] = useState({})



    const logOut = () => {
        dispatch(logout())
        setUser(JSON.parse(userLoged))
        navigate('/login')
    }

    useEffect(() => {
        setUser(JSON.parse(userLoged))
    }, [userLoged])

    console.log(user);


    return (
        <React.Fragment>
            <nav className="nav_container">
                <div className="logo_nav">
                    <img src={imgLogo} alt="cannablitz" className="img_logo" />
                    <h1>CANNABLITZ</h1>
                </div>

                <div className="icons_user">
                    {user?.isLoggedIn ?
                        <div className="icons">
                            <div className="user_icon"><FiUser /></div>
                            <div className="logout_icon" onClick={logOut}><FiLogOut /></div>
                        </div>
                        :
                        <div><h1>LogIn</h1></div>}
                </div>



            </nav>
        </React.Fragment>
    )
}
