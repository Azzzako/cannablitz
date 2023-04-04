import React from "react";
import './Navbar.css'
import imgLogo from '../../assets/CANNABLITZ.png'

export const Navbar = () => {
    return (
        <React.Fragment>
            <nav className="nav_container">
                <div className="logo_nav">
                    <img src={imgLogo} alt="cannablitz" className="img_logo" />
                    <h1>CANNABLITZ</h1>
                </div>


            </nav>
        </React.Fragment>
    )
}
