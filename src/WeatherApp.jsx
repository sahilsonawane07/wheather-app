import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WhetherApp(){
   
        const [weatherInfo,setWeatherInfo]=useState({
            city:"Nashik",
            feelsLike: 35.83,
            humidity: 25,
            temp: 36.57,
            tempMax: 36.57,
            tempMin: 36.57,
            weather: "clear sky"
        })

        let updateInfo=(newInfo)=>{
           setWeatherInfo(newInfo);
        }
    return(
        <div  style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo}/>
        </div>
    )
}