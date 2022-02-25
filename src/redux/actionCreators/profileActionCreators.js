import { getProfile } from '../../api/apiProfile';
import * as actionTypes from '../actionTypes';

export const userProfile = data => {
    return {
        type: actionTypes.PROFILE_FETCHED,
        payload: data
    }
}


export const fetchProfile = token => dispatch => {
    getProfile(token)
        .then(response => {
            dispatch(userProfile(response.data))
        })
        .catch(error => {
            console.log(error.response.data);
        })
}