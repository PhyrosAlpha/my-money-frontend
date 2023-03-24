import Container from "../../layout/Container/Container";
import Layout from "../../layout/Layout/Layout";
import LayoutItem from "../../layout/Layout/LayoutItem/LayoutItem";
import Menu from "../Menu/Menu";
import MenuItem from "../Menu/MenuItem/MenuItem"
import style from "./Header.module.scss"
import SignInAndRegister from "./SignInAndRegister/SignInAndRegister";

const Header = () => {

    return (
        <header className={style.header}>
            <div className={style.headerFlex}>
                {/*<div className={style.headerCenter}>*/}
                <Container breakpoint="sm">
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <div className={style.logoBox}>
                            <i className="fa-solid fa-money-bill-trend-up"></i>
                            <h1>My Money</h1>
                        </div>
                        <SignInAndRegister login={false} />
                    </div>
                </Container>
                {/*</div> */}
            </div>
            <nav className={style.nav}>
                {/*<div className={style.navCenter}>*/}
                <Container breakpoint="sm">
                    <Menu>
                        <MenuItem title="Home" icon="fa fa-home" href="/"/>
                        <MenuItem title="Propósito" icon="fa fa-home"/>
                        <MenuItem title="Quem somos nós?" icon="fa fa-question-circle" />
                    </Menu>
                </Container>
                {/*</div>*/}
            </nav>
        </header>
    )


}

export default Header;