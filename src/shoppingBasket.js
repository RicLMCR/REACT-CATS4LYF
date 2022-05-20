import React from "react";
import'./App.css';

function ShoppingBasket(props) {

    
        return (

            <div>
                <div className="basket">
                    {/* <h1>Your Cats</h1> */}
                    
                        {props.basketData.map((catItem, index) => {
                            return (
                                <div> {}
                                    <div>
                                        <img key={index} src={catItem.url} alt="cat basket"/>
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