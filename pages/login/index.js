import Login from "../../components/Login/Login";
import Container from "../../components/ui/layout/Container/Container";
import Main from "../../components/ui/Structure/Main/Main";

const LoginPage = (props) => {

    return (
        <Main>
            <Container>
                <Login />
            </Container>
        </Main>
    )
}

export default LoginPage;

