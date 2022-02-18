import axios from 'axios';
import {API} from '../config/config';

export const createCategory = (token, data) =>{
    
    return axios.post(`${API}/category`,data,{
        headers:{
            "Content-type":"application/json",
            "Authorization" : `Bearer ${token}`,
        }
    })
};
export const getCategory =()=>{
    return axios.get(`${API}/category`)
}

export const createProducts = (token, data) =>{
    return axios.post(`${API}/product`,data,{
        headers:{
            "Content-type":"application/json",
            "Authorization" : `Bearer ${token}`,
        }
    })
}

export const getProducts =()=>{
    return axios.get(`${API}/product`)
}
export const getFilteredProducts = (data) =>{
    return axios.post(`${API}/product/filter`,data)
}