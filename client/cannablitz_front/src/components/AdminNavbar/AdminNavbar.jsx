import React from "react";
import './AdminNavbar.css'

export const AdminNavbar = () => {
    return(
        <React.Fragment>
            <div className="nav_cont">
                <ul>
                    <li>Ventas</li>
                    <li>Usuarios</li>
                    <li>Productos</li>

                </ul>
            </div>
        </React.Fragment>
    )
}
