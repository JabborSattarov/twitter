import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

import Home from './Pages/Home/Home';

import Login from './Pages/Login/Login';
import ProfilePage from './Pages/ProfilePage/ProfilePage';

import Register from './Pages/Register/Register.jsx';
import VerifyEmail from './Pages/VerifiyEmail/VerifyEmail';

function App() {
  const navigate = useNavigate()
  
  let [ token, setToken] = useState(window.localStorage.getItem("token"))



 


  useEffect(() =>{

    if (token) {
      navigate("/")
    }else{
      navigate("/register")
    }
  },[token])
  

  return (
    <div className="App container-fluid">
      
      <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/profile'  element={<ProfilePage/>} />
        <Route path='/verifyemail'  element={<VerifyEmail/>} />
        <Route path='/register'  element={<Register/>} />
        <Route path='/login'  element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
