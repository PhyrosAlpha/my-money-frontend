import React, { FunctionComponent, ReactNode } from "react";
import style from "./Screen.module.scss"


export interface ScreenProps {
    title: string;
    icon?: string;
    code: string;
    showTitle?: boolean;
    changeScreen?: (code:string) => void;
    children?: ReactNode;
}

export const Screen: FunctionComponent<ScreenProps> = ({code, title, icon, showTitle, changeScreen, children }) => {

    function renderChild(): ReactNode {
        if(React.Children.count(children) > 1){
            throw new Error("Only one element is allowed here, please remove others elements until rest one!");  
        }

        return React.Children.map(children, (child:any) => {
            return React.cloneElement(child, {changeScreen});
        })
    }

    return(
        <div className={style['screen']}>
            { showTitle ? <h2>{title}</h2>: null}
            {renderChild()}
        </div>
    )
}

Screen.defaultProps = {
    showTitle: true
}

