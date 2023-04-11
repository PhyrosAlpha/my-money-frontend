import { FunctionComponent, useState } from "react";
import style from "./AccountCreate.module.scss"
import Layout from "../../../ui/Layout/Layout/Layout";
import LayoutItem from "../../../ui/Layout/Layout/LayoutItem/LayoutItem";
import InputText from "../../../ui/Inputs/InputText/InputText";
import Button from "../../../ui/Buttons/Button/Button";
import { create } from "./AccountActions";


interface AccountCreateProps {

    changeScreen?: (code:string) => void;
}

const AccountCreate:FunctionComponent<AccountCreateProps> = ({changeScreen}) => {

    const [input, setInput] = useState({
        name:"",
        description:"",
        accountType:""
    })

    function handlerInput({target}:any) {
        let name = target.name;
        let value = target.value;
        setInput(( prev ) => {return {...prev, [name]:value}});
    }

    return(
        <div className={style['create']}>
            <div>

            </div>
                <Layout>
                    <LayoutItem col={12} sm={4}>
                        <InputText name="name" title="Nome da conta" value={input.name} onChange={handlerInput} required />
                    </LayoutItem>
 
                    <LayoutItem col={12} sm={4}>
                        <InputText name="description" title="Descrição" value={input.description} onChange={handlerInput} />
                    </LayoutItem>

                    <LayoutItem col={12} sm={4}>
                        <InputText name="accountType" title="Tipo da conta" value={input.accountType} onChange={handlerInput} />
                    </LayoutItem>
                </Layout>
                <Layout horizontalAlign="end">
                    <Button text="Salvar" icon="fa-solid fa-floppy-disk" onClick={() => {create({name:input.name, 
                                                                                                description:input.description, 
                                                                                                accountType:input.accountType})}}/>


                    <Button text="Voltar" icon="fa-solid fa-backward" onClick={() => {changeScreen!('list-accounts')}}/>
                </Layout>
        </div>
    )
}

export default AccountCreate;