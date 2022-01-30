import jwt_decode from 'jwt-decode'
export const isAuthenticated = () =>{
    if(typeof window === 'undefined') return false 
    if(localStorage.getItem('token')){
        const {exp} = JSON.parse(localStorage.getItem('token'))
        return (new Date()).getTime() <= exp * 1000
    }else return false;
}

export const userInfo = () =>{
    const token = localStorage.getItem('token');
    const decode = jwt_decode(JSON.parse(token))
    return{...decode, token:token}
}
export const signOut = cb =>{
    if(typeof window !== 'undefined'){
        localStorage.removeItem('token');
        cb();
    }
}