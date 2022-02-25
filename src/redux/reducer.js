import * as actionTypes from './actionTypes';
const initialState = {

    user: [{
        token: null,
        id: null,
        name: null,
        role: null,
    }],
    categories: [{
        name: null,
        id: null,
    }],
    products: [{
        name: null,
        description: null,
        price: null,
        category: {
            _id: null,
            name: null,
        },
        quantity: null,
    }],
    cart: [{
        id: null,
        product: {
            _id: null,
            name: '',
        },
        price: 0,
        user: {
            _id: null,
            name: '',
        },
        count: null,
    }],
    authMsg: null,
    authError: null,
    authLoading: null,
    authSuccess: null,
    categoryLoading: null,
    categoryError: null,
    error: null,
    isLoading: null,
    profile: {}

}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                user: action.payload,
                authMsg: action.payload.message,
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
        case actionTypes.CATEGORY_LOADED:
            return {
                ...state,
                categories: action.payload,
                categoryLoading: action.payload,
            }
        case actionTypes.CATEGORY_FAILED:
            return {
                ...state,
                categoryError: action.payload,
                categoryLoading: action.payload,
            }
        case actionTypes.CATEGORY_LOADING:
            return {
                ...state,
                categoryLoading: action.payload,
            }
        case actionTypes.PRODUCT_FETCHED:
            return {
                ...state,
                products: action.payload,
                isLoading: action.payload
            }
        case actionTypes.PRODUCT_FAILED:
            return {
                ...state,
                error: action.payload,
                isLoading: action.payload,
            }
        case actionTypes.PRODUCT_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case actionTypes.CART_FETCHED:
            return {
                ...state,
                cart: action.payload
            }
        case actionTypes.CART_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case actionTypes.CART_FAILED:
            return {
                ...state,
                error: action.payload
            }
        case actionTypes.PROFILE_FETCHED:
            return {
                ...state,
                profile : action.payload
            }
        default:
            return state
    }
}