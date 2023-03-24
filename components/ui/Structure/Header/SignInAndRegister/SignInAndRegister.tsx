import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import style from './SignInAndRegister.module.scss';

interface SignInAndRegisterProps {
    login: boolean
}

const SignInAndRegister: FunctionComponent<SignInAndRegisterProps> = ({login}) => {

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
                        <li>Olá Fulano! =D</li>
                        <li>Dashboard</li>
                    </ul>
                </div>
            }
        </>
    )
}

SignInAndRegister.defaultProps = {
    login:false
}

export default SignInAndRegister;