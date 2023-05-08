import { GET_ALL_PRODUCTS, NEW_PRODUCT } from "./Actions/typeConst";

const initialState = {
    allProducts : []
}

const productReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state, 
                allProducts: action.payload
            }
            
    
        default: return state
    }
}

export default productReducer
