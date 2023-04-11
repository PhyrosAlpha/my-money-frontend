import axios from "axios";

export const myMoneyApi = axios.create({ 
    baseURL: 'http://localhost:8080'
});