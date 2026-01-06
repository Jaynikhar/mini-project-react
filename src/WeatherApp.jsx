import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function weatherApp() {
    const [WeatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 34.91,
        humidity: 60,
        temp: 31.03,
        tempMax: 31.03,
        tempMin: 31.03,
        weather: "sattered clouds",
    });

    let updateInfo= (result) => {
        setWeatherInfo(result);
    }

    return(
        <div style={{textAlign: "center"}}>
            <h2>Weather App by <i><b>JAY</b></i></h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={WeatherInfo}/>
        </div>
    );
};

