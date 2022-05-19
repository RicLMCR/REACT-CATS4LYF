import './App.css';
import './components/data';
import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import catGenerator from "catGenerator.js"


// class App extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         items: [],
//         isloaded: false,
//       }
//     }

import { faker } from "@faker-js/faker";

function generate() {
    let catCat = faker.animal.cat()
    let catPic = faker.image.cats()
    let catPrice = faker.finance.amount()
    let arrCat = [catCat, catPic, catPrice]
    return arrCat
}

export function App() {
  return (

    <div className="App">
      <div className="container">
        <h1>CATS4LYF</h1>
        <div className="catBox">
          <div className="catItem" key="1">
            <div>{generate}</div>
            
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
          <div className="catItem">Cat 9 Pic

            <div className="addToBasket">Add to basket!</div>
          </div>
        </div>
      </div>

      <div className="basket">
        <h2>Your Cats</h2>
        <div>Items should list here</div>
      </div>

    </div>
  );
}// End of App
export default App;