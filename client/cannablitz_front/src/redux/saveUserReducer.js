import { NEW_USER, NEW_USER_ERROR, ALL_USERS } from './Actions/typeConst'


const initialState = {
    error: null,
    userList: []
}


const saveUserReducer = (state = initialState, action) => {

    switch (action.type) {
        case NEW_USER_ERROR:
            return {
                ...state,
                error: action.error
            }

        case ALL_USERS:
            return {
                ...state,
                userList: action.payload
            }

        default:
            return state
    }

}

export default saveUserReducer;
