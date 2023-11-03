import {  TextField, Button } from '@mui/material'
import {Box} from '@mui/system';
import React, { useEffect } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import  '../App.css'
import { useFormik } from 'formik';

const CreateExercise = () => {
  const history = useNavigate();
  const validate= values=>{
    const errors ={};
    if(!values.username){
      errors.username="*Required username"
    }
    
    if(!values.description){
      errors.description="*Required description"
    }
    if(!values.duration){
      errors.duration="*Required duration"
    }
    if(!values.date){
      errors.date="*Required date"
    }
   
    
    return errors;
  }
  const formik = useFormik({
    initialValues: {
    username:"",
    description:"",
    duration:"",
    date:""
  },
  validate,
  onSubmit:values =>{
    axios.post("https://fitnessbackend-0wev.onrender.com/api/exercise/add",formik.values);
    history("/dashboard");
     }
  });
    useEffect(() => {
    if (!localStorage.getItem("token")) {
      history('/', { replace: true });
    }
  }, []);
  
  return (
    <div>
      <h1 className='heading'>Create Exercise</h1>
     <form onSubmit={formik.handleSubmit}>
      <Box display="flex" flexDirection="column"
       justifyContent={'center'} maxWidth={600}
       alignContent={'center'}
       alignSelf={'center'} margin={'auto'}
       marginRight={'auto'}
       marginTop={5} marginBottom={5}
       >
      
      <TextField label="Enter user Name" value={formik.values.username}  onBlur={formik.handleBlur}  onChange={formik.handleChange} margin='normal' fullWidth  variant='outlined' name="username"/> 
       {formik.touched.username && formik.errors.username ? <span>{formik.errors.username}</span>:null}<br/>
    
      <TextField label="Enter Description" value={formik.values.description} onBlur={formik.handleBlur} onChange={formik.handleChange} margin='normal' fullWidth  variant='outlined' name="description"/>
      {formik.touched.description && formik.errors.description ? <span>{formik.errors.description}</span>:null}
      <br/>
    
      <TextField label="Enter Duration" value={formik.values.duration} onBlur={formik.handleBlur} onChange={formik.handleChange} type="number" margin='normal' fullWidth  variant='outlined' name="duration"/>
      {formik.touched.duration && formik.errors.duration ? <span>{formik.errors.duration}</span>:null}
      <br/>
      
      <TextField  type="date" value={formik.values.date} onBlur={formik.handleBlur} onChange={formik.handleChange} margin='normal' fullWidth  variant='outlined' name="date"/>
      {formik.touched.date && formik.errors.date ? <span>{formik.errors.date}</span>:null}
      <br/>
      <Button variant='contained' type="submit">Created</Button>
      </Box>
      
    </form>
    </div>
  )
}

export default CreateExercise