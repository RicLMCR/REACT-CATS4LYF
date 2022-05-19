import React from 'react';
import {useEffect, useState} from 'react';
import './App.css';
import Images from './components/images';

export function App() {

  return (

    <div className="App">
      <div className="container">
        <h1>CATS4LYF</h1>
        <div className="catBox">
          <div className="catItem">
          <Images />
          </div>
            <div className="addToBasket">Add to basket!</div>
          </div>
          <div className="catItem">Cat 2 Pic

            <div className="addToBasket">Add to basket!</div>
          </div>
          <div className="catItem">Cat 3 Pic

            <div className="addToBasket">Add to basket!</div>
          </div>
          <div className="catItem">Cat 4 Pic

            <div className="addToBasket">Add to basket!</div>
          </div>
          <div className="catItem">Cat 5 Pic

            <div className="addToBasket">Add to basket!</div>
          </div>
          <div className="catItem">Cat 6 Pic

            <div className="addToBasket">Add to basket!</div>
          </div>
          <div className="catItem">Cat 7 Pic

            <div className="addToBasket">Add to basket!</div>
          </div>
          <div className="catItem">Cat 8 Pic

            <div className="addToBasket">Add to basket!</div>
          </div>
          <div className="catItem">Cat 9 Pic</div>
          </div>
          </div>

)}// End of App

export default App;