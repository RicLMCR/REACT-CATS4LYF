import React from 'react';
import '../App.css';
import {useEffect, useState} from 'react';

const Images = (props)=>{

    // Usestate for API objects
    const [catPics, setCatPics]=useState([]);

    // 'useEffect' to track changes and 'fetch' to pull images from API 
    useEffect(()=>{
        const fetchCatPics = async()=>{
            const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=9');
            // Loop through array and add additional key vaue pairs including name, price etc
            const data = await response.json();
            for (let i=0; i < data.length; i++){
                data[i]={
                    url:data[i].url,
                    name: "Lee" // replace with {fake.name}
                }
            }
            setCatPics(data);
            console.log(data)
        };
        fetchCatPics();
    },[])

    // Function to map all images pulled from API. NOTE: This needs to be blended with the cat information somehow
    const listObject = catPics.map((pic,index)=>{
        console.log({pic})
           return(
             <div>

            <div className="catItem">            
                <div className="addToBasket">Add to basket!</div>
                   <img key={index} src={pic.url} alt="Random cat pic"/>
                </div>
             </div>
           )
         }
    )

return(
    <div>
    <h1>Cats 4 Lyfe API</h1>
    {listObject}
    </div>
)

}// End of Images
export default Images;