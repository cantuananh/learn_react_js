import Home from "../index";
import {getWeather} from "../mock-data/weather";

export async function getServerSideProps() {
    const {props} = await getWeather();
    return {props};
}

export default function weather({weatherData}) {
    return (
        <>
            <div>
                <Home>
                    <h3>Weather</h3>
                    {weatherData ? (
                        <>
                            <div>
                                <p>Temperature: {weatherData.main.temp}°C</p>
                                <p>Description: {weatherData.weather[0].main}</p>
                                <p>Description: {weatherData.weather[0].description}</p>
                            </div>
                        </>
                    ) : (
                        <>
                            <p>Failed to fetch weather data.</p>
                        </>
                    )}
                </Home>

            </div>
        </>
    );
}