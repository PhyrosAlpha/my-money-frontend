import Link from "next/link";
import style from "./MenuItem.module.scss";

const MenuItem = ( {title, icon, href} ) => {

    return(
        <li className={style.menuItem}>
            <Link href={href}> {icon ? <i className={icon}></i>: null}<span>{ title }</span> </Link>
        </li>
    )
}

MenuItem.defaultProps = {
    href:"/"
}

export default MenuItem;