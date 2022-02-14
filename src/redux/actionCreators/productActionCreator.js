import * as actionTypes from '../actionTypes';
import axios from 'axios';
import { API } from '../../config/config';
import { getProducts } from '../../api/apiAdmin';


export const allProducts = data =>{
    return{
        type: actionTypes.PRODUCT_FETCHED,
        payload : data
    }
};

export const productLoading = isLoading =>{
    return{
        type: actionTypes.PRODUCT_LOADING,
        payload : isLoading,
    }
};
export const productFailed = errMsg =>{
    return{
        type: actionTypes.PRODUCT_FAILED,
        payload : errMsg,
    }
};
export const fetchProducts = ()=>dispatch=>{
    dispatch(productLoading(true));
    getProducts()
    .then(res =>{
        dispatch(productLoading(false));
        dispatch(allProducts(res.data));
    })
    .catch(err =>{
        dispatch(productLoading(false));
        dispatch(productFailed(err.response.data));
    })
}