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

            <div>
                <div className="basket">
                    <h1>Your Cats</h1>
                    <div>
                        {props.basketData.map((catItem, index) => {
                            return (
                                <div>
                                    <img key={index} src={catItem.url} alt="cat basket"/>
                                    <p>{catItem.name}</p>
                                    <p>{catItem.price}</p>
                                    <button className="removeFromBasket" onClick={() => removeFromBasket(index)}>Remove from basket</button>
                                </div>
                            )
                        })}
                        
                    </div>
                </div>
            </div>
        )
}

export default ShoppingBasket;