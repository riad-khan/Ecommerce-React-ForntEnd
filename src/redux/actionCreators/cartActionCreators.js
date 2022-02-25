import * as actionTypes from '../actionTypes';
import { getCartProducts } from '../../api/apiCart';


export const cartLoaded = data => {
    return {
        type: actionTypes.CART_FETCHED,
        payload: data,
    }
}

export const cartFailed = errMsg => {
    return {
        type: actionTypes.CART_FAILED,
        payload: errMsg
    }
};
export const cartLoading = isLoading => {
    return {
        type: actionTypes.CART_LOADING,
        payload: isLoading
    }
}

export const FetchCart = (token) => dispatch => {
   
    dispatch(cartLoading(true));
    getCartProducts(token)
        .then(response => {
            
            dispatch(cartLoading(false));
            dispatch(cartLoaded(response.data))
        })
        .catch(error =>{
            dispatch(cartLoading(false));
            dispatch(cartFailed(error.response.data));
        })
}