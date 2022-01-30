import * as actionTypes from './actionTypes';
const initialState = {
    token: null,
    userId: null,
    authError: null,
    authLoading: null,
    redirect : false,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                userId: action.payload.userId,
                authLoading: action.payload,
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