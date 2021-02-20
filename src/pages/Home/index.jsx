import React,{useState} from 'react';
import MySteeper from "../../components/MySteeper";
import Todo from "../../components/Todo";
import Mytable from "../../components/Mytable";



const Home =(props)=> {
    const[text,setText]=useState("") 
    const[number,setNumber]=useState(0) 

    const handelClick =(e)=>{
        if(text!==""){
            setNumber(parseInt(text)) 
            setText("")
        }
        
          

    }
    const handelChange =(e)=>{
        setText(e.target.value)
    }

   
    
   
    
 

    return (
        <div>
           <MySteeper/> 
           <Todo myclick={handelClick}  change= {handelChange} mytext={text}/>
           <Mytable givingnumber={number}/>
        </div>
    );
}

export default Home ;