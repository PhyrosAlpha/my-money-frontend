import React, { FunctionComponent, ReactNode } from "react";

interface LayoutItemProps {
    col?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    xxl?: number;
    children: ReactNode;
}

const LayoutItem: FunctionComponent<LayoutItemProps> = ({children, col, sm, md, lg, xl, xxl}) => {

    function generateCol(){
        return `col` + (col ? "-"+col : "")
    }
    
    function generateSM() {
        return sm ? `col-sm-${sm}` : ""
    }

    function generateMD() {
        return md ? `col-md-${md}` : ""
    }

    function generateLG() {
        return lg ? `col-lg-${lg}` : ""
    }

    function generateXL() {
        return xl ? `col-xl-${xl}` : ""
    }

    function generateXXL() {
        return xxl ? `col-xxl-${xxl}` : ""
    }
    
    return <div style={{padding:"5px 10px"}} className={`${generateCol()} ${generateXXL()} ${generateXL()} ${generateLG()} ${generateMD()} ${generateSM()}`}>
                { children }
           </div>
}

export default LayoutItem;