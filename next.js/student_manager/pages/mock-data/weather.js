import axios from 'axios';

export async function getWeather() {
    try {
        const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=hanoi&units=metric&appid=8a4f33681fff1cfd80016f1324123bd0")
        const weatherData = response.data;
        console.log(weatherData)

        return {
            props: {weatherData}
        }

    } catch (error ) {
        console.error('Error fetching weather data:', error);
        return {
            props: {weatherData: null}
        }
    }
}