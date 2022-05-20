import React from 'react';
import {useEffect, useState} from 'react';
import './App.css';
import Data from './components/data';
import ShoppingBasket from './shoppingBasket.js';

function App() {
  const [basket, setBasket] = useState([])

  return (

    <div className="App">

        <div className="header">
          <h1 id="mainHeader">CATS 4 LYFE</h1>
          <h2>Get your very own ball of floof!</h2>
        </div>
        <div className='content'> 
          <div className="catContainer">
    
          <Data setBasketFun={setBasket} basketData={basket}/>
        
          </div>
          <div className="basket">

          <ShoppingBasket basketData={basket}/>

          </div>
        </div>   

    </div>

)}// End of App


export default App;