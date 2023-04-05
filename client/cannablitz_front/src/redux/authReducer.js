import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from "./Actions/typeConst"

const initialState = {
    isLoggedIn: false,
    user: null,
    error: null
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN_SUCCESS:
            // Guarda el estado en localStorage
            localStorage.setItem('authState', JSON.stringify({
                isLoggedIn: true,
                user: action.payload,
                error: null
            }));
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload,
                error: null
            }
        case LOGIN_ERROR:
            // Guarda el estado en localStorage
            localStorage.setItem('authState', JSON.stringify({
                isLoggedIn: false,
                user: null,
                error: action.payload
            }));
            return {
                ...state,
                isLoggedIn: false,
                user: null,
                error: action.payload
            }
        case LOGOUT:
            // Borra el estado de localStorage
            localStorage.removeItem('authState');
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
