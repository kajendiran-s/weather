import React,{useState,useContext, useEffect} from "react";
import './App.css';
import Weather from "./components/Weather";
import {Dimmer, Loader} from 'semantic-ui-react';

export default function App(){
  const [lat,setLat] = useState([]);
  const [long,setLong] = useState([]);
  const [data,setData] = useState([])
  
  useEffect(()=>{
    const fetchData= async ()=>{
    navigator.geolocation.getCurrentPosition(
      function(position){
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
        console.log("Latitue is:",lat)
        console.log("Longtit is:",long)
      })

      
    await fetch(`${process.env.REACT_APP_API_URL}/weather?lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
    .then(res=>res.json())
    .then(result=>{
      setData(result)
      console.log(result)
    });
  }
  fetchData();}
  ,[lat,long])

  return(<div className="App">
    {
      (typeof data.main != 'undefined')?
      (<Weather weatherData = {data}/>):
      (<div>
        <Dimmer active>
          <Loader>Loading...</Loader>
        </Dimmer>
      </div>)
    }
  </div>);
}
