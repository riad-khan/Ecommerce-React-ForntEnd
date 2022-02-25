import axios from 'axios';
import { API } from '../config/config';

export const addToCart = (token, product) => {
    return axios.post(`${API}/cart`, product, {
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`,
        }
    })
}

export const getCartProducts = (token) => {
   
    return axios.get(`${API}/cart`, {
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`,
        }
    })
}
export const updateCart =(token,cartItem) =>{
    return axios.put(`${API}/cart`,cartItem, {
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`,
        }
    })
}
export const DeleteCart = (token,id) =>{
    return axios.delete(`${API}/cart/`+id, {
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`,
        }
    })
}