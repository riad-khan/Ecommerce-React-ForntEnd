import * as actionTypes from '../actionTypes';
import axios from 'axios';
import { API } from '../../config/config';
import { getProducts, getFilteredProducts } from '../../api/apiAdmin';


export const allProducts = data => {
    return {
        type: actionTypes.PRODUCT_FETCHED,
        payload: data
    }
};

export const productLoading = isLoading => {
    return {
        type: actionTypes.PRODUCT_LOADING,
        payload: isLoading,
    }
};
export const productFailed = errMsg => {
    return {
        type: actionTypes.PRODUCT_FAILED,
        payload: errMsg,
    }
};
export const fetchProducts = (order, sortBy, limit, skip, filters) => dispatch => {
    const data = {
        order: order,
        sortBy: sortBy,
        limit: limit,
        skip: skip,
        filters: {
           ...filters
        }

    }
   
    if (filters) {
        dispatch(productLoading(true));
        getFilteredProducts(data)
            .then(res => {
                dispatch(productLoading(false));
                dispatch(allProducts(res.data));
            })
            .catch(error => {
                dispatch(productLoading(false));
                dispatch(productFailed(error.response.data));
            })
        console.log(data.filters.category);
    } else {
       
        dispatch(productLoading(true));
        getProducts()
            .then(res => {
                dispatch(productLoading(false));
                dispatch(allProducts(res.data));
            })
            .catch(error => {
                dispatch(productLoading(false));
                dispatch(productFailed(error.response.data));
            })
    }

    

}