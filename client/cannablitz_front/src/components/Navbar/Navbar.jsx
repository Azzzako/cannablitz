import React, { useEffect, useState } from "react";
import './Navbar.css'
import imgLogo from '../../assets/CANNABLITZ.png'
import { useDispatch } from "react-redux";
import { logout } from "../../redux/Actions/authActions";
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut } from 'react-icons/fi'
import { FiUserCheck, FiShoppingCart } from 'react-icons/fi'
import { FaUserTimes } from 'react-icons/fa'
import { Loader } from "../Loader/Loader";

export const Navbar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userLoged = localStorage.getItem('authState')
    const [user, setUser] = useState({})
    const [loader, setLoader] = useState(false)
    const style = {
        textDecoration: 'none',
        color: 'black',
    }

    const logOut = () => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
            dispatch(logout())
            setUser(JSON.parse(userLoged))
            navigate('/login')
        }, 2000)
    }

    const login = () => {
        navigate('/login')
    }

    useEffect(() => {
        setUser(JSON.parse(userLoged))
    }, [userLoged])

    


    return (
        <React.Fragment>
            <nav className="nav_container">
                <Link to='/' style={{ textDecoration: 'none', color: 'black' }}><div className="logo_nav">
                    <img src={imgLogo} alt="cannablitz" className="img_logo" />
                    <h1>CANNABLITZ</h1>
                </div></Link>
                {
                    user?.user?.role !== 'admin' ?
                        <div className="icons_user">
                            {user?.isLoggedIn ?
                                <div className="icons">
                                    <div className="user_icon"><FiUserCheck /></div>
                                    <div className="logout_icon"><FiShoppingCart /></div>
                                    <div className="logout_icon" onClick={logOut}><FiLogOut /></div>
                                </div>
                                :
                                <div className="icons">
                                    <div className="login_icon" onClick={login}><FaUserTimes /></div>
                                </div>
                            }
                            {
                                loader ?
                                    <div><Loader /></div>
                                    :
                                    null
                            }

                        </div>
                        :
                        <div className="icons_user">
                            <div className="icons">
                                <Link to='/dashboard' style={{ textDecoration: 'none', color: 'black' }}><span className="dashboard_btn">Admin</span></Link>
                                <div className="logout_icon" onClick={logOut}><FiLogOut /></div>
                            </div>

                        </div>


                }


            </nav>

            <nav>
                <div>
                    {
                        user?.user?.role === 'admin' ?
                            <ul className="submenu">
                                <li>Ventas</li>
                                <Link to='/dashboard/userlist' style={style}><li>Usuarios</li></Link>
                                <Link to='/dashboard/product' style={style}><li>Productos</li></Link>
                                <Link to='/products' style={style}><li>Tienda</li></Link>
                            </ul>
                            :
                            <ul className="submenu">
                                <li>Inicio</li>
                                <li>Tienda</li>
                                <li>Catego</li>
                            </ul>
                    }

                </div>
            </nav>
        </React.Fragment>
    )
}
