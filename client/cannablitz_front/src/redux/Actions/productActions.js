import { GET_ALL_PRODUCTS, NEW_PRODUCT } from "./typeConst";
import axios from "axios";

export const saveNewProduct = (newProduct) => async (dispatch) => {
    try {
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        const response = await axios.post('http://localhost:3001/product', newProduct, config)
        dispatch({
            type: NEW_PRODUCT,
            payload: response.data
        })
    } catch (error) {
        console.log(error);
    }
}


export const getAllProducts = () => async (dispatch) => {
    try {
        const response = await axios.get('http://localhost:3001/product')
        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: response.data
        })
    } catch (error) {
        console.log(error)
    }
}
