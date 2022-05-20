import React from "react";
import'/app.css';


function shoppingBasket() {
    const [basket, setBasket] = useState([])
        return (
            <div>
                <div className="basket">
                    <h1>Your Cats</h1>
                    <div>
                        <img src="cat pic goes here"/>
                        <p className="catName"></p>
                        <p className="catPrice"></p>
                    </div>
                </div>
            </div>
        )
}