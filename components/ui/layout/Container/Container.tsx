import React, { FunctionComponent, ReactNode } from "react";

interface ContainerProps {
    breakpoint?: "sm" | "md" | "lg" | "xl" | "xxl" | "fluid";
    children: ReactNode;
}

const Container: FunctionComponent<ContainerProps> = ( {children, breakpoint} ) => {

    function generateContainer() {
        return `container ${breakpoint}`
    }

    return(
        <div style={{padding:"5px 10px"}} className={generateContainer()}>
            {children}
        </div>
    )
}

Container.defaultProps = {
    breakpoint:"sm"
}

export default Container;