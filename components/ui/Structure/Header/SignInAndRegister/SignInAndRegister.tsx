import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import style from './SignInAndRegister.module.scss';

interface SignInAndRegisterProps {
    login: boolean;
    name?: string;
}

const SignInAndRegister: FunctionComponent<SignInAndRegisterProps> = ({login, name}) => {

    return(
        <>
            {
                !login
                ?
                <div className={style.signInAndRegister}>
                    <div>
                        <i className="fa-regular fa-user-astronaut"></i>
                    </div>

                    <ul>
                        <li><Link href="/login">Faça o Login</Link></li>
                        <li><Link href="/register"> Registre-se</Link></li>
                    </ul>
                </div>
                :
                <div className={style.signInAndRegister}>
                    <div>
                        <i className="fa-regular fa-user"></i>
                    </div>
                    <ul>
                    <Link href="/dashboard"><li>Olá {name}! =D</li></Link>
                        <li>
                            <i style={{fontSize:"25px", marginRight:"5px"}} className="fa-solid fa-compass"></i>
                            <Link href="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <i style={{fontSize:"25px", marginRight:"5px"}} className="fa-solid fa-right-from-bracket"></i>
                            <Link href="/api/logout">Sair</Link>
                        </li>
                    </ul>
                </div>
            }
        </>
    )
}

SignInAndRegister.defaultProps = {
    login:false,
    name:"Usuário"
}

export default SignInAndRegister;