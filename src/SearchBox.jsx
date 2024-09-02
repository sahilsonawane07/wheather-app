import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let[city,setCity]=useState("");
    let[err,setErr]=useState(false)

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="8fcf063e41eaa75b11cc2aecd7dfc2af";
    
    let getWheatherInfo= async()=>{
        try{ let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse= await response.json();
    
        let result={
         city:city,
         temp:jsonResponse.main.temp,
         tempMin:jsonResponse.main.temp_min,
         tempMax:jsonResponse.main.temp_max,
         humidity:jsonResponse.main.humidity,
         feelsLike:jsonResponse.main.feels_like,
         weather:jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    }catch(err){
        throw err;
    }
       
    };

    
    let handleChange=(event)=>{
        setCity(event.target.value);

    }
    let handleSubmit= async (event)=>{
        try{ event.preventDefault();
            setCity("");
           let newInfo = await getWheatherInfo();
           updateInfo(newInfo);
        }catch(err){
          setErr(true)
        }
       
    };
    return(
        <div className="SearchBox">
    <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name" 
          variant="outlined" 
          required value={city}
          onChange= {handleChange} 
        />
         <br></br> <br></br>
         <Button variant="contained" type="submit"> search</Button>
        {err && <p style={{color:"red"}}>No such place exists!</p>}
    </form>
        </div>
    )
}