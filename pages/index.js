import Calendar from '../components/ui/DynamicCalendar/Calendar'
import Container from '../components/ui/layout/Container/Container'
import Layout from '../components/ui/layout/Layout/Layout'
import LayoutItem from '../components/ui/layout/Layout/LayoutItem/LayoutItem'
import Main from '../components/ui/Structure/Main/Main'

export default function Home() {
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

//              <div className='col-lg-4 col-md-12 col-ms-12'>