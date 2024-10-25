import React from "react";
import { useEffect } from "react";
const App = ()=>{
    // key 9f780ea4
    const API_URL= "http://www.omdbapi.com?apikey=9f780ea4"
    const searchMovies = async(title,)=>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data);
    };
    useEffect(()=>{
        searchMovies("Spiderman");
    },[]);
    return (
        <h1>App</h1>
    );
}

export default App;