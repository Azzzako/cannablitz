import { ALL_USERS, NEW_USER_ERROR } from "./Actions/actions";

const initialState = {
    error: null,
    userList: []
}


const rootReducer = (state = initialState, action) => {

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

export default rootReducer;
