import React, {useState, useEffect} from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Maincard from '../components/mainCard'
import config from '../lib/config'
import Typography from '@material-ui/core/Typography';
import { useFetchUser } from '../lib/user'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      width: 300,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

function Main() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const [events, setEvents] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [value, setValue] = useState('');

    const { user, loading } = useFetchUser()
    const [question, setQuestion] = useState("")
    const [description, setDescription] = useState("")

    const submit = (e) => {
      console.log({question, description})
      
      var date = new Date();

      var dd = date.getDate();

      var mm = date.getMonth()+1; 
      var yyyy = date.getFullYear();
      var hh = date.getHours();
      var min = date.getMinutes();

      if(dd<10) 
      {
          dd='0'+dd;
      } 

      if(mm<10) 
      {
          mm='0'+mm;
      } 

      if (min<10) 
      {
        min = '0' + min
      }

      if (hh < 10) {
        hh = '0' + hh
      }
      var today = mm+'-'+dd+'-'+yyyy + ' ' + hh + ':' + min;

      const info = {
        Question: question,
        Description: description,
        Date: today
      }

      fetch('/api/qa',{ method:'POST', body: JSON.stringify(info)})
      setEvents([info, ...events])
      
      console.log(`Result: ${JSON.stringify(events)}`)


      const q = document.getElementById('Question').value;
      const d = document.getElementById('Description').value;
      // update page
      document.getElementById('Question').value = "";
      document.getElementById('Description').value = "";

      document.getElementById('inputForm').style.display = "none";
      e.preventDefault()
      toggle()
  }

    // fetch data
    useEffect(() => {
      const fetchEvents = async () => {
        const res = await fetch(`${config.HOST}/api/events`)
        const evts = await res.json()
        setLoading(false)
        setEvents(evts)
      }
      fetchEvents()
    }, [])

    const handleChange = (event) => {
      setValue(event.target.value);
    }

    const openForm = (e) => {
      toggle();
    }

    const closeForm = (e) => {
    
      toggle();
    }

    function toggle() {
      var blur = document.getElementById('blur');
      blur.classList.toggle('active');
      var inputForm = document.getElementById('inputForm');
      inputForm.classList.toggle('active');
    }

    return (
        <>
          <div className="wholebox">
            <div className="topbutt" id="blur">
              <Button variant="contained" color="primary" className="button2" onClick={e => openForm(e)}>Seek Help</Button>

              <Button variant="contained" color="secondary" className="button2">Live Chat</Button>
              {isLoading ? <CircularProgress color="secondary" size={50} style={{position: 'absolute', top:'50%', left:'50%'}}/> : events.sort((a,b) => new Date(b.Date).getTime()).map(event => <Maincard title={event.Question} date={event.Date} description={event.Description}/> )}
                  
              <Typography className="footer">Made with love by sixDynamos</Typography>
            </div>
            <div id="inputForm" className="popupForm">
            <button type="button" className="closeButton" onClick={e => closeForm(e)}>X</button>
                  <form className="inputElements">
                    <h2>Question:</h2>
                    <input className="question" id="Question" type="text" placeholder="Enter your problem..." onChange={e => setQuestion(e.target.value)}></input><br></br>
                    <h2>Description:</h2>
                    <textarea className="description" id="Description" placeholder="Describe your problem" onChange={e => setDescription(e.target.value)}></textarea><br></br>
                    <input className="postButton" type="submit"onClick={e => submit(e)} value="Post"></input>
                  </form>
                </div>
          </div>
        </>
    );
}

export default Main;

