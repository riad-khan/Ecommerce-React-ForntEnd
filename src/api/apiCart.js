import axios from 'axios';
import {API} from '../config/config';

export const addToCart = (token, product) =>{
    return axios.post(`${API}/cart`,product,{
        headers:{
            "Content-type":"application/json",
            "Authorization" : `Bearer ${token}`,
        }
    })
}