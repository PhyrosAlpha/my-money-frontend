import axios from "axios";

export default async function handler(req, res) {

    const BASE_URL = "http://localhost:8080";
    const { user, password } = req.body;
    try{
        const response = await axios.post(`${BASE_URL}/login`, {login: user, password: password});
        const TOKEN = response.data.token;
        const USERNAME = response.data.username;
        const EMAIL = response.data.email;
        res.setHeader("set-cookie", [`token=${TOKEN};path=/`, 
        `email=${EMAIL};path=/`, 
        `username=${USERNAME};path=/`,
        `logged=1;path=/`]);
        return res.redirect(307, '/dashboard');
    }catch(error){
        return res.redirect(307, '/login');
    }

}