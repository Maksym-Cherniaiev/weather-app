import axios from "axios";

const URL = "https://api.apixu.com/v1/current.json";
const apiKey = "2d7ebdd87bcf48e9b7f184126192507";

function getWeatherByLocation(location) {
  let weatherData = {};
  return axios.get(`${URL}?key=${apiKey}&q=${location.lat},${location.lng}`)
  .then(data => {
    const {name} = data.data.location;
    const {temp_c, temp_f, humidity, pressure_mb: pressure, condition} = data.data.current;
    weatherData.location = {
      name,
      icon: condition.icon,
      alt: `current ${condition.icon.substring(16, 23)} in ${name}`
    }
    weatherData.temp = {
      temp_c,
      temp_f
    };
    weatherData.extra = {
      humidity,
      pressure,
      condition: condition.text
    }
    return weatherData;
  })
  .catch(error => console.log(`weather API: ${error}`))
}

export default getWeatherByLocation;