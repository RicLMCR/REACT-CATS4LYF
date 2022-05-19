import React from 'react';
import {useEffect, useState} from 'react';
import './App.css';
import Images from './components/images';

function App() {

  return (

    <div className="App">

      <div className="container">
        <h1>CATS4LYF</h1>
        <div className="catBox">
        <Images />
          </div>
      </div>
    </div>

)}// End of App

export default App;