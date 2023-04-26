import React, { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from "react-redux";
import './Users.css'
import { getAllUsers } from "../../../redux/Actions/userActions";



export const Users = () => {

    const dispatch = useDispatch()
    const userList = useSelector(state => state.save.userList)

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'fullName', headerName: 'Full Name', width: 200 },
        { field: 'role', headerName: 'Role', width: 200 },
        { field: 'email', headerName: 'Email', width: 200 }
    ];

    const rows = userList.map(user => {
        return {
            id: user.id,
            fullName: `${user.firstName} ${user.lastName}`,
            role: user.role,
            email: user.email
        }
    })

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    
    return (
        <React.Fragment>
            <div style={{ }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    checkboxSelection
                />
            </div>
        </React.Fragment>
    )
}
