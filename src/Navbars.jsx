import React, { useState } from 'react'
import {AppBar,Tab,Tabs,Toolbar,Typography} from '@mui/material'
//import BookIcon from '@mui/icons-material/Book';
import { NavLink, useNavigate} from 'react-router-dom'
import './Components/Exercise.css'
import { Button } from '@mui/material';

const Navbars = () => {
  const [value,setValue] = useState(0);
 const navigate = useNavigate();
 
  const handlelogout = () =>{
    localStorage.removeItem("token");
    navigate('/');
	window.location.reload();
  }
  return (
    <>
    <AppBar sx={{backgroundColor :"#232F3D"}} postion = "sticky">
          <Toolbar>
            <NavLink to="/" style={{color:"white"}}>
          <Typography><h1>Fitness</h1></Typography></NavLink>
          <Tabs sx={{ml:"auto"}} textColor="inherit" indicatorColor = "primary"
           value={value} 
            onChange={(e,val) =>setValue(val)}>

              
            <Tab LinkComponent={NavLink} to="/" label ="Home"  />
            <Tab LinkComponent={NavLink} to="/signup" label="SignIn/Signup" />
            <Tab LinkComponent={NavLink} to="/create" label="Create Exercise" />
            <Tab LinkComponent={NavLink} to="/dashboard" label="Dashboard" />
            <Tab LinkComponent={NavLink} to="/warmup" label ="warmup" />
            
          </Tabs>
          <Button onClick={handlelogout} sx={{mt:'auto'}}>Log Out</Button>
          </Toolbar>
  
          
       </AppBar>

</>
  )
}

export default Navbars