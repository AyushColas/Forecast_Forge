import React,{useState} from 'react'
import { useEffect } from 'react';

const Temparature = () => {
  const [city, setcity] = useState(null)
  const [Search, setSearch] = useState("London")
  useEffect(() => {
    const fetchapi= async()=>{
      const url= `https://api.openweathermap.org/data/2.5/weather?q=${Search}&appid=f1059086a88665edfe91fe0bbd4c4b46`
      const response= await fetch(url)
      const resjson= await response.json()
      setcity(resjson.main);
      
      

    }
    fetchapi();
  },[Search])
    
  
  
  
  return (
    <>
    <h1 className='heading'>Weather</h1>

   
    <div className="search">
          <input className='search1'   type="search" placeholder='Another country' onChange={(event)=>{
            setSearch(event.target.value)
          }}  />
          <div className="example">
            <p>California</p>
            <p>India</p>
            <p>Pakistan</p>
            <p>Norway</p>
          </div>
          <hr />
          <div className="climate">
            <p>Weather Details</p>
            <p>Pressure: {city.pressure}</p>
            <p>Humidity: {city.humidity}</p>
            <p>Max_temp: {city.temp_max}</p>
            <p>Min_temp {city.temp_min}</p>
          </div>
           
          
           
          


    </div> 
    {
            !city ? (
              <p>no data found</p>
            ) :(
              <>
              
              
              <div className="degree">
        <p className='temp'>{city.temp} </p>
        <p className='city'>
           {Search}
        </p>
        
    </div>
   
             
    </>
              
            )
          }
          



    
    
  

    </>
  );
  
};
export default Temparature;