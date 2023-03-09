import Head from 'next/head'
import Image from 'next/image'
import Calendar from '../components/ui/DynamicCalendar/Calendar'
import Container from '../components/ui/layout/Container/Container'
import Main from '../components/ui/Structure/Main/Main'

export default function Home() {
  return (
    <Main>
      <Container breakpoint="sm">
          <div className='row'>
            <div className='col-lg-4 col-md-12 col.ms-12'>
              <Calendar />  
            </div>
            <div className='col-lg-4 col-md-12 col.ms-12'>
              <Calendar />  
            </div>
            <div className='col-lg-4 col-md-12 col.ms-12'>
              <Calendar /> 
            </div> 
          </div>
        </Container>


    </Main>
  )
}
