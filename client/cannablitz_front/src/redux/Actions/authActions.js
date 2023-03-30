import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from "./typeConst";
import axios from "axios";


export const login = (userTryLogin) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:3001/login', userTryLogin)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: LOGIN_ERROR,
            payload: error.response.data.msg
        })
    }
}
