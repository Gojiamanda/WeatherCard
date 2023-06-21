import './WeatherCard.css';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

const WeatherCard = ({className,cityName, style}) => {

  const [data,setData] = useState([])
  const [loading,setLoading] = useState(true)
  
  useEffect(()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=87881d70f464ee8317cd7db314b787bc`)
    .then(res => res.json())
    .then(result => {
      setData(result)
      setLoading(false)
    });
    
  },[cityName]);

  if(loading){
    return <div>loading...</div>
  }

  console.log(style)
  return (
    <div className={`cardWrapper ${className}`} >
      <div className="cityTitle">
        <h4>City Name</h4>
        <p>{cityName}</p>
      </div>

      <div className="weatherIcon">
        <img src="" />
      </div>

      <div className="weatherCondition">
        <h4>Weather Condition</h4>
        <p>{data.weather[0].main}</p>
      </div>

      <div className="date">
        <h4>Date</h4>
        <p>{dayjs(data.ts).format('YYYY-MM-DD')}</p>
      </div>

      <div className="temprature">
        <h4>Temprature</h4>
        <p>{(data.main.temp-273.15).toFixed(2)}℃</p>
      </div>

      <div className="humidity">
        <h4>Humidity</h4>
        <p>{data.main.humidity}%</p>
      </div>
    </div>
  )
}

export default WeatherCard;