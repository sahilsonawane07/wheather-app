import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"




export default function InfoBox({info}){
    const COLD_URL=
    "https://images.unsplash.com/photo-1593687642750-fed751b4e476?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  
     const HOT_URL=
    "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
     const RAIN_URL=
    "https://images.unsplash.com/photo-1498847559558-1e4b1a7f7a2f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  return(
    <div className="InfoBox" >
      <div className="cardContainer">
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image = {
            info.humidity > 80 ? 
            RAIN_URL 
            : info.temp > 15 ? 
            HOT_URL 
            : COLD_URL
          }


        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city} {
            info.humidity > 80 ? 
            <ThunderstormIcon />
            : info.temp > 15 ? 
          <WbSunnyIcon />
            : <AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
        <p>Temperature = {info.temp}&deg;C</p>
        <p>humidity = {info.humidity}</p>
        <p> Max Temperature  = {info.tempMax}&deg;C</p>
        <p> MinTemperature = {info.tempMin}&deg;C</p>
        <p>The weather can be described as <i>{info.weather}</i> and feels like = {info.feelsLike}&deg;C</p>
        <div></div>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    </div>
  )
}