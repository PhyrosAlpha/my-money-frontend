import Menu from "../Menu/Menu";
import MenuItem from "../Menu/MenuItem/MenuItem"
import style from "./Header.module.scss"

const Header = () => {

    return (
        <header className={style.header}>
            <div className={style.headerFlex}>
                <div className={style.headerCenter}>
                    <div className={style.logoBox}>
                        <i className="fa-solid fa-money-bill-trend-up"></i>
                        <h1>My Money</h1>
                    </div>
                </div>
            </div>
            <nav className={style.nav}>
                <div className={style.navCenter}>
                    <Menu>
                        <MenuItem title="Home" icon="fa fa-home"/>
                        <MenuItem title="Propósito" icon="fa fa-home"/>
                        <MenuItem title="Quem somos nós?" icon="fa fa-question-circle" />
                        <MenuItem title="Quem somos nós?" icon="fa fa-question-circle" />
                        <MenuItem title="Quem somos nós?" icon="fa fa-question-circle" />
                    </Menu>
                </div>
            </nav>
        </header>
    )


}

export default Header;