import React, { FunctionComponent, useState } from "react";
import Container from "../ui/Layout/Container/Container";
import Layout from "../ui/Layout/Layout/Layout";
import style from "./Login.module.scss";
import InputText from "../ui/Inputs/InputText/InputText";
import Button from "../ui/Buttons/LoginButton/Button";



interface LoginProps{

}

const Login: FunctionComponent<LoginProps> = (props) => {

    const [input, setInput] = useState({
        user:"",
        password:""
    })

    function handlerInput({target}:any) {
        let name = target.name;
        let value = target.value;
        setInput(( prev ) => {return {...prev, [name]:value}});
    }

    return(
        <Container>
            <Layout>
                <div className={style['login']}>
                    <div className={style['login-header']}>
                        <i className="fa fa-user"></i><span>Login</span>
                    </div>
                    <form method="post" action="http://localhost:3000/api/login">
                        <div className={style['login-body']}>   
                            <InputText name="user" title="Usuário" value={input.user} onChange={handlerInput} required={true} />
                            <InputText name="password" title="Password" value={input.password} onChange={handlerInput} 
                                required={true} password={true} minLength={4} />
                            <Button text="Entrar"/>
                        </div>
                    </form>
                    <div className={style['login-footer']}>
                        <p>Esqueceu a senha?</p>
                    </div>
                </div>
            </Layout>
        </Container>   
    )
}

export default Login;