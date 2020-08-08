import Layout from '../components/layout'
import { Greet, Hello } from '../components/Hello'
import { useState, useEffect } from 'react'
import config from '../lib/config'
import { render } from 'enzyme'
// React Components can be very very terse
const name = 'Henry'


const HelloFunction = () => {
  const [isLoading, setLoading] = useState(true)
  const [events, setEvents] = useState([])
  // fetch data
  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch(`${config.HOST}/api/events`)
      const evts = await res.json()
      setEvents(evts)
      setLoading(false);
    }
    fetchEvents()
  }, [])


  return(
    
    <Layout>
      <article>
        <h1>React Hello World</h1>
        <Greet/>
        <Hello name={name} />
        {/* <h1>{events[0] ? events[0].Question : ''}</h1> */}
        {isLoading ? <center>"Loading!"</center> : events.map(event => {
          return(
            <div>
            <h1>{event ? event.Question : ''}</h1>
            <h2>{event ? event.Answer : ''}</h2>  
            <h2>{event ? event.Date : ''}</h2>  
            </div>
          )
        })}
        
        
        
      </article>
    </Layout>
  )
      
}

export default HelloFunction
  
