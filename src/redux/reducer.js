import * as actionTypes from './actionTypes';
const initialState = {

    user: [{
        token: null,
        id: null,
        name: null,
        role: null,
    }],
    authMsg: null,
    authError: null,
    authLoading: null,
    redirect: false,
    authSuccess: null,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                user: action.payload,
                authMsg : action.payload.message,
                authLoading: action.payload,
                authSuccess: true,
            }
        case actionTypes.AUTH_LOADING:
            return {
                ...state,
                authLoading: action.payload,
            }
        case actionTypes.AUTH_FAILED:
            return {
                ...state,
                authLoading: action.payload,
                authError: action.payload
            }
        default:
            return state
    }
}