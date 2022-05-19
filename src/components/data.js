import React from 'react';
import '../App.css';
import {useEffect, useState} from 'react';

const App = ()=>{

    // Usestate for API objects
    const [catPics, setCatPics]=useState([]);

    useEffect(()=>{
        const fetchCatPics = async()=>{
            const response = await fetch('api_key=fd99a4be-f585-4000-8ac0-b1a5ec018a61');
            const data = await response.json();
            setCatPics(data);
            console.log(data)
        };
        fetchCatPics();
    },[])


return(
    <h1>Cats 4 Lyfe API</h1>
)

}// End of App
export default App;