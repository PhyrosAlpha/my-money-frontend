import { useEffect } from "react";
import { myMoneyApi } from "../../services/AxiosInstances";
import { getCookie } from "../../common/utils/tools"
import { Screen } from "../ui/Screens/Screen/Screen";
import Screens from "../ui/Screens/Screens";
import AccountCreate from "./Account/AccountCreate/AccountCreate";

const Dashboard = () => {

    useEffect(() => {
        myMoneyApi.defaults.headers.common['authorization'] = getCookie('token');

        myMoneyApi.get('/account')
        .then((response) => {
            console.log(response.data);
        })
        .catch(() => {

        })

    }, [])

    return(
        <div>
            <h2>Dashboard</h2>
            <Screens defaultScreen="create-account" showMenu={false}>
                <Screen code="list-accounts" title="Contas" icon="fa fa-star">

                </Screen>

                <Screen code="create-account" title="Criar Conta" icon="fa fa-star">
                    <AccountCreate />
                </Screen>
                
                <Screen code="update-account" title="Atualizar Conta" icon="fa fa-star">

                </Screen>
            </Screens>
        </div>
    )
}

export default Dashboard