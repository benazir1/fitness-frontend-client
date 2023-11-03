import React, { useEffect, useState } from 'react'
import axios from 'axios'
//import Exercise from './Exercise'
import './Exercise.css'
import { useNavigate } from 'react-router-dom'
import Exercisecomp from './Exercisecomp'


//const URL = "http://localhost:5000/api/exercise/all"

//const fetchHandle = async() =>{
//  return await axios.get("http://localhost:5000/api/exercise/all").then((res)=>res.data)
  //}

const Dashboard = () => {
  
  const history = useNavigate();
  const [exercises,setExercises] =useState();

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fitnessbackend-0wev.onrender.com/api/exercise/all");
      setExercises(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(()=>{
    if (!localStorage.getItem("token")) {
      history('/', { replace: true });
    }
   fetchData();
  },[]);
  console.log(exercises);
  
  return (
    <div>
    <ul>
      {exercises && exercises.map((exercise,i)=>(
        <li className='exercise' key={i}>
          <Exercisecomp exercise={exercise}/>

        </li>
      ))}
    </ul>
  </div>
  )
}

export default Dashboard