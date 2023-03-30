import axios from 'axios'
import { NEW_USER, NEW_USER_ERROR, ALL_USERS } from './typeConst'


export const saveNewUser = (user) => {
    return async function (dispatch) {
        try {
            const newUser = await axios.post(`http://localhost:3001/user`, user)
            return dispatch({
                type: NEW_USER,
                payload: newUser
            })

        } catch (error) {
            return dispatch({
                type: NEW_USER_ERROR,
                error: newUser
            })
        }
    }
}

export const getAllUsers = () => {
    return async function (dispatch) {
        try {
            const userList = await axios.get(`http://localhost:3001/user`)
            return dispatch({
                type: ALL_USERS,
                payload: userList.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

