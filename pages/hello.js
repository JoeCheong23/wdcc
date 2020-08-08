import Layout from '../components/layout'
import { Greet, Hello } from '../components/Hello'
import { useState, useEffect } from 'react'
import config from '../lib/config'
// React Components can be very very terse
const name = 'Henry'

function HelloFunction () {
  const [events, setEvents] = useState([])
  // fetch data
  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch(`${config.HOST}/api/events`)
      const evts = await res.json()
      setEvents(evts)
    }
    fetchEvents()
  }, [])

  return(
    <Layout>
      <article>
        <h1>React Hello World</h1>
        <Greet />
        <Hello name={name} />
        <h1>{events[1] ? events[1].Question : ''}</h1>
      </article>
    </Layout>
  )
}
export default HelloFunction
  
