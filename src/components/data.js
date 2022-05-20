import React from 'react';
import '../App.css';
import {useEffect, useState} from 'react';
import faker from "@faker-js/faker"

const Data = ()=>{

    // Usestate for API objects
    const [catPics, setCatPics]=useState([]);

    // 'useEffect' to track changes and 'fetch' to pull images from API 
    useEffect(()=>{
        const fetchCatPics = async()=>{
            const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=9');

            // Loop through array and add additional key vaue pairs to the catPics object - name, price etc
            const data = await response.json();
            for (let i=0; i < data.length; i++){
                data[i]={
                    url:data[i].url,
                    name: faker.name.firstName(),
                    price: faker.finance.amount(60, 250, 0, '£')
                }
            }
            setCatPics(data);
            console.log(data)
        };
        fetchCatPics();
    },[])

    // Function to map all images pulled from API and data from FakeData
        const listObject = catPics.map((pic,index)=>{
        console.log({pic})
           return(
                <div className="catItem">            
                    <img key={index} src={pic.url} alt="Random cat pic"/>
                    <div className="addToBasket">Add to basket!</div>
                    <p>{pic.name}</p>
                    <p>{pic.price}</p>
                </div>
           )
         }
    )

return(
    <div className="catSelection">
    {listObject}
    </div>

)

}// End of Images
export default Data;