import * as actionTypes from '../actionTypes';
import axios from 'axios';
import { API } from '../../config/config'

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: {
            token: token,
            userId: userId,
        }
    }
};
export const authLoading = isLoading => {
    return {
        type: actionTypes.AUTH_LOADING,
        payload: isLoading
    }
};

export const authFailed = errMsg => {
    return {
        type: actionTypes.AUTH_FAILED,
        payload: errMsg,
    }
};
export const redirect = isRedirect =>{
    return{
        type: actionTypes.REDIRECT,
        payload : isRedirect,
    }
}


export const loginUser = (email, password) => dispatch => {
    dispatch(authLoading(true));
    const formData = {
        email: email,
        password: password
    }
    axios.post(`${API}/user/sign-in`, formData, {
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => {
            dispatch(authLoading(false));
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userId', response.data.id);
            dispatch(authSuccess(response.data.token, response.data.id))
            dispatch(redirect(true));

        })
        .catch(error => {
            dispatch(authLoading(false));
            dispatch(authFailed(error.response.data))
        })
} 