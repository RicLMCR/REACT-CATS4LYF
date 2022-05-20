import React from "react";
import'./App.css';

function ShoppingBasket(props) {
    console.log(props.basketData);
    
        return (
                <div className="basket">
                    <h2>Your Selection</h2>
                    <p>Quantity {props.basketData.length} </p>
                    <p>Total amount to pay {total = props.basketData.catItem.price}</p>
                    <div>
                        {props.basketData.map((catItem, index) => {
                            return (
                                <div className="purchaseSummary">
                                    <img className="basketImage" key={index} src={catItem.url} alt="cat basket"/>
                                    <div className="purchaseInfoContainer">
                                        <p>{catItem.name}</p>
                                        <p>{catItem.price}</p>

                                    </div>                                    
                                </div>
                            )
                        })}
                        
                    </div>
                </div>           
        )

    
}

export default ShoppingBasket;