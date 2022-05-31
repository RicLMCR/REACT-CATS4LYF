import React from "react";
import'./App.css';

function ShoppingBasket(props) {
    console.log(props.basketData)
    const removeFromBasket = (index) => {
        let remover = [...props.basketData]
        remover.splice(index, 1)
        props.setBasketFun(remover);
    };
        return (
                <div className="basket">
                    <h2>Your Selection</h2>
                    <div>
                        {props.basketData.map((catItem, index) => {
                            return (
                                <div className="purchaseSummary">
                                    <img className="basketImage" key={index} src={catItem.url} alt="cat basket"/>
                                    <div className="purchaseInfoContainer">
                                        <p>{catItem.name}</p>
                                        <p className="price">{catItem.price}</p>
                                        <button className="removeFromBasket" onClick={() => removeFromBasket(index)}>Remove</button>
                                    </div>                                    
                                </div>
                            )
                            // {props.basketData.reduce((catItem.price)=>****
                            //     )}
                        })}
                        
                    </div>
                </div>   
        )
}

export default ShoppingBasket;