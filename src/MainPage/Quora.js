import React from "react";
import QuoraHeader from "../MainPage/QuoraHeader";
  import Feed from "./Feed";
  // import {BrowserRouter,Routes,Route } from "react-router-dom";
import Sidebar from "./Sidebar";
 import Widget from "./Widget";
import "./Quora.css";

function Quora() {
  return (
    
    <div className="quora">
    <QuoraHeader/>
      {/* <Route path='/QuoraHeader' exact element= {<QuoraHeader/>} /> */}
      <div className="quora__contents">
        <div className="quora__content">
       <Sidebar />   
      <Feed /> 
      <Widget />
        </div>
      </div>
    </div>
   
    
  );
}

export default Quora