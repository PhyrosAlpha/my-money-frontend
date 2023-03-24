import React, { FunctionComponent, ReactNode } from "react";

interface LayoutProps {
    horizontalAlign?: "start" | "end" | "center" | "around" | "between" | "evenly";
    verticalAlign?: "start" | "end" | "center";
    children: ReactNode;
}

//Row
const Layout: FunctionComponent<LayoutProps> = ({ children, horizontalAlign, verticalAlign }) => {
    return <div style={{padding:"5px 10px"}} className={`row justify-content-${horizontalAlign} align-items-${verticalAlign}`}>
                { children }
          </div>
}

Layout.defaultProps = {
    horizontalAlign: "center",
    verticalAlign: "center"
}

export default Layout;