import axios from 'axios'
import Calendar from '../components/ui/DynamicCalendar/Calendar'
import Container from '../components/ui/Layout/Container/Container'
import Layout from '../components/ui/Layout/Layout/Layout'
import LayoutItem from '../components/ui/Layout/Layout/LayoutItem/LayoutItem'
import Main from '../components/ui/Structure/Main/Main'

export default function Home({ssrData}) {

	//console.log(document.cookie)

  return (
    <Main>
		<Container breakpoint="sm" >
			<Layout horizontalAlign="start">
				<LayoutItem>
					<Calendar />  
				</LayoutItem>
				<LayoutItem>
					<Calendar  />  
				</LayoutItem>
				<LayoutItem>
					<Calendar  />  
				</LayoutItem>
				<LayoutItem>
					<Calendar  />  
				</LayoutItem>
			</Layout>
		</Container>
    </Main>
  )
}

export async function getServerSideProps({req, res}){
	console.log(Object.keys(req));
	console.log(req.cookies);
	return {
		props:{ssrData:"Hello Honey =D!"}
	}
}

