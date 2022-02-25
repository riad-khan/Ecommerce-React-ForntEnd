import axios from 'axios';
import { API } from '../config/config';

export const createProfile = (token, formData,userId) =>{
    return axios.post(`${API}/profile`,formData,{
        headers:{
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`,
        }
    })

  
}

export const getProfile = (token) =>{
    return axios.get(`${API}/profile`,{
        headers:{
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`,
        }
    })
}