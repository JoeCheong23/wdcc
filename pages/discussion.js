import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'
import {useState} from 'react'

function Discussion () {
    const { user, loading } = useFetchUser()
    const [question, setQuestion] = useState("")
    const [description, setDescription] = useState("")

    const submit = (e) => {
        e.preventDefault()
        console.log({question, description})
        
        const info = {
          question: question,
          description: description
        }

        fetch('/api/qa',{ method:'POST', body: JSON.stringify(info)})
    }
  
    return (
        <article>
          <h1>Discussion Board</h1>
          <form>
            <input type="text" placeholder="Question" onChange={e => setQuestion(e.target.value)}></input><br></br>
            
            <textarea id="Description" placeholder="Describe your question" onChange={e => setDescription(e.target.value)}></textarea>
            <input type="submit"onClick={e => submit(e)} value="Submit"></input>
          </form>
        </article>
    )
  }
  
  export default Discussion
  