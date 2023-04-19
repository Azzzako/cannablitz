import React from "react";
import './Dashboard.css'
import { CreateProduct } from "../createProduct/createProduct";
import { AdminNavbar } from "../AdminNavbar/AdminNavbar";

export const Dashboard = () => {
    return (
        <React.Fragment>
            <div className="gral_dash">
                <div>
                    <AdminNavbar />
                </div>
                
                <CreateProduct />
            </div>

        </React.Fragment>
    )
}
