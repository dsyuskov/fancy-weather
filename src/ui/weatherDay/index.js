// eslint-disable-next-line import/no-cycle
import WeatherDay from './cmp-weatherDay';

export default (className) => {
  const weatherDay = new WeatherDay(className);
  weatherDay.render();
};
