import React, { FunctionComponent } from "react";
import style from "./Button.module.scss"

interface ButtonProps {
    text: string;
}

const Button: FunctionComponent<ButtonProps> = ({text}) => {

    return(
        <button className={style.button}>
            <i className="fa-sharp fa-solid fa-right-to-bracket"></i>
            {text}
        </button>
    )
}

export default Button;