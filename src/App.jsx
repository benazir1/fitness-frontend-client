import React from 'react';
import {Routes,Route,Navigate} from 'react-router-dom'
import './App.css'
import {Box} from '@mui/material'
import Navbar from './Navbars';
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import CreateExercise from './Components/CreateExercise';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import Warmup from './Components/Warmup';
import UpdateExercise from './Components/UpdateExercise';
import Forgotpassword from './Components/Forgotpassword.jsx';
import Resetpassword from './Components/Resetpassword.jsx';



function App() {

  const user = localStorage.getItem("token");
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar/>
      <Routes>	
      <Route path="/" exact element={<Home />} />		 
			<Route path="/signup"  element={<Signup />} />
			<Route path="/login" element={< Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
      {user && <Route path="/create"  element={< CreateExercise />} />}
      {user && <Route path="/dashboard"  element={<Dashboard/>}/>}
      <Route path="/warmup"  element={< Warmup />} />
      <Route exact path="/update/:id" element={<UpdateExercise/>} />
      <Route exact path="/forgotpassword" element={<Forgotpassword/>} />
     
      <Route exact path="/resetpassword/:id/:token" element={<Resetpassword/>}/> 
		</Routes>
   
    </Box>
  )
}

export default App
