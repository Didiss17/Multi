import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 0, 1, 2, 3,4),
  
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

 const Mytable=(props)=> {
  const classes = useStyles();
const myData =[0,1,2,3,4,5,6]
  return  props.givingnumber?(
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            {myData.map(item=><StyledTableCell>{item}</StyledTableCell>)}
            
          </TableRow>
        </TableHead>
        <TableBody>
        {myData.map(item=><StyledTableCell>{item * props.givingnumber}</StyledTableCell>)}


        </TableBody>
      </Table>
    </TableContainer>
  ):null;
}
export default Mytable;
