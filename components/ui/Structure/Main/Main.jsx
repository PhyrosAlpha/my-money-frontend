import Head from "next/head"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import style from "./Main.module.scss"


const Main = ( props ) => {

    return(
        <div className={style.background}>
            <Head>
                <title>My Money - Because not all money is Green!</title>
            </Head>
            
            <Header/>
                <main className={style.main}>
                    {props.children}
                </main>
            <Footer />
        </div>
    )
}

export default Main;