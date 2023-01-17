import Footer from "../footer/footer"
import Header from "../header/header"

const Main = ( props ) => {


    return(
        <>
            <Header/>
                <main>
                    {props.children}
                </main>
            <Footer />
        </>
    )
}

export default Main;