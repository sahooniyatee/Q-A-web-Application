import React from 'react';
import Login from './Login/Login';
import LoginUser from './LoginUser/LoginUser';
 import {BrowserRouter,Routes,Route } from "react-router-dom";
import Quora from './MainPage/Quora';
// import LoginUser from './LoginUser/LoginUser';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
         
      <Route path='/' exact element={<LoginUser />}  />
      <Route path='/LoginUser' exact element={<LoginUser />}  />
     <Route path='/Login' exact element={<Login />} />
          <Route path='/Quora' exact element={<Quora/>} />
      </Routes>
      </BrowserRouter>
      {/* <Quora/> */}
     
      
      

    </>
  );
}

export default App


