import { Button } from '@mui/material';
import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Exercise.css'
import axios from 'axios';

const Exercisecomp = ({exercise}) => {
  console.log(exercise);
    const history = useNavigate();
  const{_id,username,description,duration,date}=exercise;

  const handleDelete = async() =>{
    await axios.delete(`https://fitnessbackend-0wev.onrender.com/api/exercise/${_id}`)
  .then((res)=>res.data)
  .then(res=>{
    location.reload();
  }) 
}
  console.log(_id,username,description,duration,date);
  return (
    <div className='card'>
         <p >User Name:{exercise.username}</p>
         <p>Description:{exercise.description}</p>
         <p>Duration:{exercise.duration}Minutes</p>
         <p className='p1'>Date:{exercise.date}</p><br/>
         <Button size="small" variant='contained' LinkComponent={Link} to={`/update/${_id}`}sx={{mt:'auto'}}>Update</Button><br/>
        <Button  size="small" variant='contained' color="error"onClick={handleDelete} sx={{mt:'auto'}}>Delete</Button> 
          </div>
  )

}
export default Exercisecomp