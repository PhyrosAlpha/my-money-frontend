import React, { FunctionComponent, useState } from "react";
import style from "./InputText.module.scss";
import exports from "../../../../styles/abstract/_exports.module.scss";


interface InputTextProps {
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
    name: string;
    value?: string;
    title?: string;
    password?: boolean;
    minLength?: number;
    maxLength?: number;
    required?: boolean;
    readonly?: boolean;
    disabled?: boolean;
}

const InputText: FunctionComponent<InputTextProps> = ({title, name, value, password, minLength, maxLength, required, readonly, disabled, onChange}) => {

    const [clicked, setClicked] = useState<boolean>(false);
    const [hidden, setHidden] = useState<boolean>(true);

    function hiddenRules() {
        if(password) {
            if(hidden) {
                return "password";
            }else {
                return "text";
            }
        }else{
            return "text"
        }
    }

    function handlerHidden() {
        hidden ? setHidden(false) : setHidden(true); 
    }

    return(
        <div className={style['input-text']}>
            <input 
                type={hiddenRules()}
                name={name}
                value={value}
                onFocus={() => {setClicked(true)}} 
                onBlur={() => {value?.length! === 0 ? setClicked(false) : null}} 
                onChange={onChange} 
                disabled={disabled}
                minLength={minLength}
                maxLength={maxLength}
                required={required}
                readOnly={readonly}
            />
            { password ? <i onClick={handlerHidden} className={`fa-solid fa-eye${hidden ? "-slash" : ""} fa-bounce`}></i> : null}
            <label htmlFor="" style={clicked ? {transform:"translateY(-148%)", fontSize:"14px", color:exports['primary-color']} : null!}>{title}</label>
        </div>
    )
}

InputText.defaultProps = {
    password: false,
    minLength: 0,
    maxLength: 255,
    required: false,
    readonly: false,
    disabled: false
}

export default InputText;