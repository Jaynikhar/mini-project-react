import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css";

export default function InfoBox({info}) {

    const COLD_URL = 
        "https://images.unsplash.com/photo-1644716276377-59d4908d3729?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ;
    const HOT_URL = 
        "https://images.unsplash.com/photo-1675176681512-7bc9cd0d9196?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ;
    const RAIN_URL = 
        "https://plus.unsplash.com/premium_photo-1725408051956-a6dc142169bd?q=80&w=997&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ;
    return(
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image= { 
                        info.humidity > 80 
                            ? RAIN_URL 
                            : info.temp > 15 
                            ? HOT_URL 
                            : COLD_URL 
                    }
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city} { 
                        info.humidity > 80 
                            ? <ThunderstormIcon/>
                            : info.temp > 15 
                            ? <SunnyIcon/> 
                            : <AcUnitIcon/> 
                    }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                    <p>Temperature = {info.temp}&deg;C</p>
                    <p>Humidity = {info.humidity}</p>
                    <p>Min Temp = {info.tempMin}&deg;C</p>
                    <p>Max Temp = {info.tempMax}&deg;C</p>
                    <p>The Weather can be described as <b><i>{info.weather}</i></b> and feels like {info.feelsLike}&deg;C</p>
                    <p></p>
                    </Typography>
                </CardContent>
                </Card>
            </div>
        </div>
        
    );
}