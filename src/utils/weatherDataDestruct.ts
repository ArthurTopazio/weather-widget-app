
export const weatherDataDestruct = (weatherData: any) => {
  let weathercode, temperatureByHours, weatherCodes, days, hourlyTemperature;

  if (Object.keys(weatherData).length > 0) {
    weathercode = JSON.parse(JSON.stringify(weatherData)).daily.weathercode.splice(0, 1)[0];
    temperatureByHours = JSON.parse(JSON.stringify(weatherData)).hourly.temperature_2m.splice(0, 24);
    weatherCodes = JSON.parse(JSON.stringify(weatherData)).daily.weathercode;
    days = JSON.parse(JSON.stringify(weatherData)).daily.time;
    hourlyTemperature = JSON.parse(JSON.stringify(weatherData)).hourly.temperature_2m;
  };


  return { weathercode, temperatureByHours, weatherCodes, days, hourlyTemperature };
}; 