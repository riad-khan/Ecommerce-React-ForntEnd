import axios from 'axios';
import {API} from '../../../config/config';

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