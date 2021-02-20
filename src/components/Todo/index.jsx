import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Todo=(props)=> {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off" onChange={props.change} >
      
      <TextField id="outlined-basic" label="Outlined" variant="outlined" type="number" value={props.mytext}/>
      <Button variant="contained" color="primary"  onClick={props.myclick}>
        Secondary
      </Button>
    </form>
  );
}
export default Todo;