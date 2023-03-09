import style from "./Menu.module.scss";

const Menu = ( props ) => {

    return (<ul className={style.menu}>
        {props.children}
    </ul>)
}

export default Menu;