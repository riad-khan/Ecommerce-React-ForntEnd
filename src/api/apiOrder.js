import axios from 'axios';
import { API } from '../config/config';

export const initPayment = token =>{
    return axios.get(`${API}/payment`,{
        headers:{
            "Authorization": `Bearer ${token}`,
        }
    })
}