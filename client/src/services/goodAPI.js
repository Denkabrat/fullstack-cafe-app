import { $host,$authorizationHost} from "./index";


export const getAllGoods  = async () => {

    const {data} = await $host.get(`api/goods/`);
    
    return data;
}



