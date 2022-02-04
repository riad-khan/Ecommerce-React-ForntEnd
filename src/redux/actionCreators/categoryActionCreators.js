import * as actionTypes from '../actionTypes';
import axios from 'axios';
import { API } from '../../config/config';
import { getCategory } from '../../components/Admin/category/apiAdmin'

export const categoryLoaded = data => {
    return {
        type: actionTypes.CATEGORY_LOADED,
        payload: data
    }
};
export const CategoryFailed = errMsg => {
    return {
        type: actionTypes.CATEGORY_FAILED,
        payload: errMsg
    }
};
export const categoryLoading = isLoading => {
    return {
        type: actionTypes.CATEGORY_LOADING,
        payload: isLoading
    }
}

export const fetchCategory = () => dispatch => {
    dispatch(categoryLoading(true));
    getCategory()
        .then(response => {
            dispatch(categoryLoaded(response.data));
            dispatch(categoryLoading(false));
           
        })
        .catch(error => {
            dispatch(CategoryFailed(error.response.data));
            dispatch(categoryLoading(false));
        })

}