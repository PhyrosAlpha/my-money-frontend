import Dashboard from "../../components/Dashboard/Dashboard";
import Container from "../../components/ui/Layout/Container/Container";
import Main from "../../components/ui/Structure/Main/Main"

const DashboardPage = ( props ) => {
    return(
        <Main>
            <Container>
                <Dashboard />
            </Container>
        </Main>
    )
}

export async function getServerSideProps({req, res}){
    const LOGGED = req.cookies.logged ? req.cookies.logged : 0;

	if(!Number(LOGGED)){
		return {
			redirect: {
				destination: '/login',
				permanent: false,
			}
		}
	}

    return {
        props: {}
    }
}

export default DashboardPage