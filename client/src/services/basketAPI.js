import { $authorizationHost } from "./index";

export const getCart = async () => {

    const {data} = await $authorizationHost.get('api/basket/getCart');
    
    return data;
}

export const addToCart  = async ({goodId}) => {
    try {
        const {data} = await $authorizationHost.post('api/basket/addToCart', {goodId});
    
        return data;
    } catch (error) {
        console.log(error);
    }
    
}

export const ChangeCountAndDelete  = async ({goodId,action}) => {

    const {data} = await $authorizationHost.put('api/basket/changeCountAndDelete',{goodId,action});
    
    return data;
}