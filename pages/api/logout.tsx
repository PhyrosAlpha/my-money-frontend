export default async function handler(req, res) {
    const DELETE = "Thu, 01 Jan 1970 00:00:00 UTC"

    try{
        res.setHeader("set-cookie", [`token=''; expires=${DELETE} ; path=/`, 
        `email=''; expires=Thu, expires=${DELETE}; path=/`, 
        `username=''; expires=${DELETE}; path=/`,
        `logged=0;path=/`]);
        return res.redirect(307, '/');
    }catch(error){
        return res.redirect(307, '/');
    }

}