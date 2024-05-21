import { $authorizationHost,$host } from "./index";
import { jwtDecode } from "jwt-decode";


export const registration  = async ({email,password,name}) => {

    const {data} = await $host.post('api/user/register',{email,password,name});
        localStorage.setItem('annaCafe', data);

    return jwtDecode(data);

}

export const login  = async ({email,password}) => {

    const {data} = await $host.post('api/user/login',{email,password});
        localStorage.setItem('annaCafe', data.token);

    return jwtDecode(data.token);

}

export const checkAuthorization  = async () => {

    const {data} = await $authorizationHost.get('api/user/auth');
    localStorage.setItem('annaCafe', data);

    return jwtDecode(data);

}

