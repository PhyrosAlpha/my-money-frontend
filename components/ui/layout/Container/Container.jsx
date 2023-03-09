const Container = ( {children, breakpoint} ) => {

    function generateContainer() {
        switch(breakpoint){
            case "sm":
                return "container-sm";
            case "md":
                return "container-md";
            case "lg":
                return "container-lg";
            case "xl":
                return "container-xl";
            case "xxl":
                return "container-xxl";
            case "fluid":
                return "container-fluid";
            default:
                return "container";
        }
    }

    return(
        <div className={generateContainer()}>
            {children}
        </div>
    )
}

Container.defaultProps = {
    breakpoint:"default"
}

export default Container;