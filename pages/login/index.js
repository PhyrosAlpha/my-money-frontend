import Login from "../../components/Login/Login";
import Container from "../../components/ui/Layout/Container/Container";
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

export async function getServerSideProps({req, res}){
	const LOGGED = req.cookies.logged ? req.cookies.logged : 0;

	if(Number(LOGGED)){
		return {
			redirect: {
				destination: '/dashboard',
				permanent: false,
			}
		}
	}

	return {
		props:{ssrData:"Hello Honey =D!"}
	}

}

export default LoginPage;



