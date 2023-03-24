import React, { FunctionComponent } from "react";
import Container from "../ui/layout/Container/Container";
import Layout from "../ui/layout/Layout/Layout";
import LayoutItem from "../ui/layout/Layout/LayoutItem/LayoutItem";
import style from "./Login.module.scss";

interface LoginProps{

}

const Login: FunctionComponent<LoginProps> = (props) => {

    return(
        <Container>
            <Layout horizontalAlign="center">
                <LayoutItem col={4}>
                    <div>
                        <div>

                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                </LayoutItem>
            </Layout>
        </Container>   
    )
}

export default Login;