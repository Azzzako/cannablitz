import React from "react";
import './Dashboard.css'
import { AdminNavbar } from "../AdminNavbar/AdminNavbar";

export const Dashboard = () => {
    return (
        <React.Fragment>
            <div className="gral_dash">
                <div>
                    <AdminNavbar />
                </div>
            </div>

        </React.Fragment>
    )
}
