import React, { useEffect,useState } from 'react'

const App = () => {
  const[data, setData] = useState([]);
  const[loading, setloading] = useState(true);
  useEffect(() =>{
    fetch("https://dummyjson.com/products")
    .then((res)=>Response.json())
    .then((data)=>console.log(data))
    .catch((err)=>console.log("Error",err)) ;
  });
  return 
  };
    <div>
      
    </div>
  


export default App

