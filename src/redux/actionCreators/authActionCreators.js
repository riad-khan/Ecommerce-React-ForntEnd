import * as actionTypes from '../actionTypes';
import axios from 'axios';
import { API } from '../../config/config';


export const authSuccess = (userDate) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: {
            userData : userDate
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
            localStorage.setItem('token', JSON.stringify(response.data.token));
            localStorage.setItem('userId', response.data.id);
            dispatch(authSuccess(response.data))
            dispatch(redirect(true));

        })
        .catch(error => {
          
            dispatch(authLoading(false));
            dispatch(authFailed(error.response.data))
            console.log(error.response.data)
        })
} 