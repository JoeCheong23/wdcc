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
        const q = document.getElementById('Question').value;
        const d = document.getElementById('Description').value;
        // update page
        document.getElementById('Question').value = "";
        document.getElementById('Description').value = "";

        document.getElementById('inputForm').style.display = "none";
    }

    const openForrm = (e) => {
      document.getElementById('inputForm').style.display = "block";
    }

    const closeForm = (e) => {
      document.getElementById('inputForm').style.display = "none";
    }
  
    return (
      <div>
      <header>
        <a href='/about'>About</a>
      </header>
        
        <button type="button" onClick={e => openForrm(e)}>Seek Help</button>
        
        <div className="questionForm">
          <h1>Question and Answer Board</h1>
          <div id="inputForm" className="popupForm">
            <form className="inputElements">
              <button type="button" className="closeButton" onClick={e => closeForm(e)}>X</button>
              <h2>Question:</h2>
              <input className="question" id="Question" type="text" placeholder="Question" onChange={e => setQuestion(e.target.value)}></input><br></br>
              <h2>Description:</h2>
              <textarea className="description" id="Description" placeholder="Describe your question" onChange={e => setDescription(e.target.value)}></textarea><br></br>
              <input className="postButton" type="submit"onClick={e => submit(e)} value="Post"></input>
            </form>
          </div>
        </div>
      </div>
    )
  }
  
  export default Discussion
  