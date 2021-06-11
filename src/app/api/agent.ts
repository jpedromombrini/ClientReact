import axios, { AxiosResponse } from 'axios';
import { LegalPerson } from '../models/legalPerson';
import { ResultRequest } from '../models/resultRequest';

const sleep = (delay: number) => {
    return new Promise((resolve)=>{
        setTimeout(resolve, delay)
    })
}

axios.defaults.baseURL = 'http://localhost:5000/api/';

axios.interceptors.response.use(async response => {
    try {
        await sleep(1000);
        return response;
    } catch (error) {
        console.log(error);
        return await Promise.reject(error);
    }
})
const responseBody = <T>(response: AxiosResponse<T>) => response.data;
const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body:{}) => axios.post<T>(url).then(responseBody),
    put: <T>(url: string, body:{}) => axios.put<T>(url).then(responseBody),
    del: <T>(url: string) => axios.delete<T>(url).then(responseBody)
}

const LegalPersons = {
    list: () => requests.get<ResultRequest>('/LegalPerson?CompanyName=In'),
    details: (id: string) => requests.get<ResultRequest>(`/LegalPerson/${id}`),
    create: (legalPerson: LegalPerson) => requests.post<ResultRequest>('/LegalPerson', legalPerson),
    update: (legalPerson: LegalPerson) => requests.put<ResultRequest>('/LegalPerson', legalPerson),
    delete: (id: string) => requests.del<ResultRequest>(`/LegalPerson/${id}`)
}

const agent = {
    LegalPersons
}

export default agent;
