import { myMoneyApi } from "../../../../services/AxiosInstances";

interface Account {
    name: string;
    description: string;
    accountType: string;
}

//List Account


//Create Account
export function create(obj:Account, callbackSuccess?: () => void, callbackError?: () => void) {

    myMoneyApi.post('/account', {
        name: obj.name,
        description: obj.description,
        type: obj.accountType
    })
    .then((response) => {
        callbackSuccess? callbackSuccess(): null;
        console.log(response.data)
    })
    .catch((error) => {
        callbackError? callbackError(): null;
        console.log(error.response.data)
    })
}

//Delete Account


//Update Account