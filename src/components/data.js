import React from 'react';
import '../App.css';
import {useEffect, useState} from 'react';

const Data = (props)=>{

    // Usestate for API objects
    const [catPics, setCatPics]=useState([]);


    // useEffect to track changes and fetch to pull from API 
    useEffect(()=>{
        const fetchCatPics = async()=>{
            // const response = await fetch('api_key=fd99a4be-f585-4000-8ac0-b1a5ec018a61');
            const response = await fetch('https://zoo-animal-api.herokuapp.com/animals/rand/5');
            const data = await response.json();
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
               <div className="box">
             <h1 key={index}>{pic.name}</h1>
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

}// End of data
export default Data;