import React, { FunctionComponent } from "react";
import style from "./Button.module.scss"

interface ButtonProps {
    text: string;
    icon?: string;
    onClick?: () => void;
}

const Button: FunctionComponent<ButtonProps> = ({text, icon, onClick}) => {

    return(
        <button className={style.button} onClick={onClick}>
            { icon ? <i className={icon}></i> : null}
            {text}
        </button>
    )
}

Button.defaultProps = {
    onClick: () => {}
}

export default Button;