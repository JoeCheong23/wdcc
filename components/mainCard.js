import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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

function Maincard({title, date, description}) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    
  
    return (
      <Card className="box">
        <CardContent>
          <Typography variant="h5" component="h2" className="h1">
            {title}
          </Typography>
          <Typography className="test" color="textSecondary">
            {date}
          </Typography>
          <Typography variant="body2" component="p" className="subHead">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" className="button">Comment</Button>
        </CardActions>
      </Card>
    );
}

export default Maincard;

