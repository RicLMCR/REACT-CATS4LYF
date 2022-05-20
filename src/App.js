import React from 'react';
import {useEffect, useState} from 'react';
import './App.css';
import Images from './components/images';


export function App() {
  const [basket, setBasket] = useState([])

  return (

    <div className="App">
      <div className="container">
        <h1>CATS4LYF</h1>
        <div className="catBox">
          <div className="catItem">
          <Images />
          </div>
            <button className="addToBasket">Add to basket!</button>
          </div>
          <div className="catItem">Cat 2 Pic

            <button className="addToBasket">Add to basket!</button>
          </div>
          <div className="catItem">Cat 3 Pic

            <button className="addToBasket">Add to basket!</button>
          </div>
          <div className="catItem">Cat 4 Pic

            <button className="addToBasket">Add to basket!</button>
          </div>
          <div className="catItem">Cat 5 Pic

            <button className="addToBasket">Add to basket!</button>
          </div>
          <div className="catItem">Cat 6 Pic

            <button className="addToBasket">Add to basket!</button>
          </div>
          <div className="catItem">Cat 7 Pic

            <button className="addToBasket">Add to basket!</button>
          </div>
          <div className="catItem">Cat 8 Pic

            <button className="addToBasket">Add to basket!</button>
          </div>
          <div className="catItem">Cat 9 Pic</div>
          </div>
        </div>

)}// End of App


export default App;