import { useState, useEffect } from "react"

export default function Home() {
   
   useEffect( ()=> {
    fetch("http://localhost:3000/blogs")
    .then( (response) => {
        return response.json();
    })
    .then ( (data) => {
        console.log(data);
    })
   })
   
   
   
   
   
   
   
    return (
        <div>

        </div>
    )
}