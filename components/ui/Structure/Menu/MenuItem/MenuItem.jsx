import style from "./MenuItem.module.scss";

const MenuItem = ( {title, icon} ) => {

    return(
        <li className={style.menuItem}>
            {icon ? <i className={icon}></i>: null}<span>{ title }</span>
        </li>
    )
}

export default MenuItem;