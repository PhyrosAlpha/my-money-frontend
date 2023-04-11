import Container from "../../Layout/Container/Container";
import Menu from "../Menu/Menu";
import MenuItem from "../Menu/MenuItem/MenuItem"
import style from "./Header.module.scss"
import SignInAndRegister from "./SignInAndRegister/SignInAndRegister";
import { useEffect, useState } from "react";
import { getCookie } from "../../../../common/utils/tools";

const Header = () => {

    const [logged, setLogged] = useState(0)
    const [name, setName] = useState("Usuário");

    useEffect(() => {
        setLogged(Number(getCookie('logged')));
        setName(getCookie('username'));

    }, [])

    return (
        <header className={style.header}>
            <div className={style.headerFlex}>
                <Container breakpoint="sm">
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <div className={style.logoBox}>
                            <i className="fa-solid fa-money-bill-trend-up"></i>
                            <h1>My Money</h1>
                        </div>
                        <SignInAndRegister login={logged} name={(name)} />
                    </div>
                </Container>
            </div>
            <nav className={style.nav}>
                <Container breakpoint="sm">
                    <Menu>
                        <MenuItem title="Home" icon="fa fa-home" href="/"/>
                        <MenuItem title="Propósito" icon="fa fa-home"/>
                        <MenuItem title="Quem somos nós?" icon="fa fa-question-circle" />
                    </Menu>
                </Container>
            </nav>
        </header>
    )
}

export default Header;