import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Maincard from '../components/mainCard'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


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
  
    return (
        <>
            <Button variant="contained" color="primary">Submit Your Problem</Button>
            <Button variant="contained" color="secondary">Live Chat</Button>
            <Maincard ></Maincard>
        </>
    );
}

export default Main;

