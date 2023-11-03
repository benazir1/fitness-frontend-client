import { FormLabel, TextField, Button } from '@mui/material'
import {Box} from '@mui/system';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate,useParams} from 'react-router-dom'



const UpdateExercise = () => {

    const history = useNavigate();
    const id =useParams().id;
    console.log(id);

  const [inputs,setInputs] = useState({});
  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:5000/api/exercise/${id}`);
  //     setInputs(response.data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };
  //console.log(setInputs);
  
  useEffect(()=>{
    
      const fetchHandler = async() =>{
        await axios.get(`http://localhost:5000/api/exercise/${id}`)
        .then((res)=>res.data).then(data=>setInputs(data));
         };
  fetchHandler();
    },[id]);
   // fetchData();


  const handleChange =(e) =>{
          setInputs((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
          }))
  }
     
    
  
    const sendRequest = async() =>{
  await axios.put(`http://localhost:5000/api/exercise/update/${id}`,{
      username :String(inputs.username),
      description:String(inputs.description),
      duration:Number(inputs.duration),
      date:Date(inputs.date),
    }).then((res)=>res.data);
    }

    const handleSubmit =(e) =>{
        e.preventDefault();
        sendRequest().then(()=>history('/dashboard'));
        //console.log(inputs);
        }
  
  return (
    <div>
    { inputs &&(
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column"
       justifyContent={'center'} maxWidth={700}
       alignContent={'center'}
       alignSelf={'center'} margin={'auto'}
       marginRight={'auto'}
       marginTop={10}
       >
      <FormLabel>User Name</FormLabel>
      <TextField  value={inputs.username} onChange={handleChange} margin='normal' fullWidth  variant='outlined' name="username"/>

           
      <FormLabel>Description</FormLabel>
      <TextField value={inputs.description} onChange={handleChange} margin='normal' fullWidth  variant='outlined' name="description"/>
      
      <FormLabel>duration</FormLabel>
      <TextField value={inputs.duration} onChange={handleChange} type="number" margin='normal' fullWidth  variant='outlined' name="duration"/>
    
      <FormLabel>Date</FormLabel>
      <TextField value={inputs.date} onChange={handleChange} margin='normal' fullWidth  variant='outlined' name="date"/>
      
           
      <Button variant='contained' type="submit">Updated</Button>
      </Box>
      
    </form>)}
   </div>
  )
}

export default UpdateExercise