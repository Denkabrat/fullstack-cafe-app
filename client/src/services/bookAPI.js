import { $host,$authorizationHost} from "./index";


export const getAllBooks  = async () => {

    const {data} = await $authorizationHost.get(`api/book/getBooks`);
    
    return data;
}

export const createBook = async (formData) => {

    const {data} = await $host.post(`api/book/create`,formData);
    
    return data;
}


