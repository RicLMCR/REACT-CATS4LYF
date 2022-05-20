import React from 'react';
import {useEffect, useState} from 'react';
import './App.css';
import Data from './components/data';

function App() {

  return (

    <div className="App">

        <div className="header">
          <h1 id="mainHeader">CATS4LYFE</h1>
          <h2>Get your very own ball of floof!</h2>
        </div>
        <div className='content'> 
          <div className="catContainer">
    
          <Data />
        
          </div>
          <div className="basket">
      
          </div>
        </div>   

    </div>

)}// End of App

export default App;