import Layout from '../components/layout'
import { Greet, Hello } from '../components/Hello'
import { useState, useEffect } from 'react'
import config from '../lib/config'
// React Components can be very very terse
const name = 'Henry'

function HelloFunction () {
  const [events, setEvents] = useState([])
  const [value, setValue] = useState('');


  // fetch data
  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch(`${config.HOST}/api/events`)
      const evts = await res.json()
      setEvents(evts)
    }
    fetchEvents()
  }, [])

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = async (event) => {
    alert('A name was submitted: ' + value);
    await fetch(`${config.HOST}/api/events`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({newTitle: value})
      
    })
    console.log('after')
    console.log(JSON.stringify({newTitle: value}))
    event.preventDefault();
  }


  return(
    <Layout>
      <article>
        <h1>React Hello World</h1>
        <Greet />
        <Hello name={name} />
        <h1>{events[1] ? events[1].Question : ''}</h1>

        {events.map(event => {
          return (
            <h1>{event ? event.Question : ''}</h1>
          )
        })}

      <form>
        <label>
          Title:
          <input type="text" name="title" value={value} onChange={handleChange}/>
        </label>
        <input type="submit" value="Submit" onClick={handleSubmit}/>
      </form>
      </article>
    </Layout>
  )
}
export default HelloFunction
  
