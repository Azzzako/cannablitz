import axios from 'axios'
export const NEW_USER = 'NEW_USER'
export const NEW_USER_ERROR = 'NEW_USER_ERROR'
export const ALL_USERS = 'ALL_USERS'


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

