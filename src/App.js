import './App.css';
import './components/data';
import React from 'react';
import { useEffect, useState } from 'react';
import { faker } from "@faker-js/faker";

let catCat = faker.animal.cat()
let catPic = faker.image.cats()
let catPrice = faker.finance.amount()

let arrCat = [catCat, catPic, catPrice]
}

export function App() {
  return (

    <div className="App">
      <div className="container">
        <h1>CATS4LYF</h1>
        <div className="catBox">
          <div className="catItem">Cat 1 Pic
            {faker.fake((item, index))}
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