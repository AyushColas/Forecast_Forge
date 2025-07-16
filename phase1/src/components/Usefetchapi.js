
import React, {useState,useEffect}  from  'react'

const Usefetchapi = () => {
  const [Weather, setWeather] = useState([]);
  const getUser= async()=>{
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}")
    setWeather(await response.json())
    console.log()
    
  }
  
  useEffect(()=>{
    getUser();
  },[])
  
  return (
    <>
    <h1>
      Weather cast
    </h1>
   
    

    </>
  )
}

export default Usefetchapi