import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from "./Actions/typeConst"

const initialState = {
    isLoggedIn: false,
    user: null,
    error: null
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload,
                error: null
            }
        case LOGIN_ERROR:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
                error: action.payload
            }
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
                error: null
            }
        default:
            return state
    }
}

export default authReducer;
