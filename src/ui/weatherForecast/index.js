import WeatherForecast from './cmp-weatherForecast';

export default (className) => {
  const weatherForecast = new WeatherForecast(className);
  weatherForecast.render();
};
