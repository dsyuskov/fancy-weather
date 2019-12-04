import WeatherDay from './cmp-weatherDay';

const data = {
  city: {
    name: 'Balashov',
    country: 'Russia',
    coord: {
      lat: '54',
      lon: '51',
    },
  },
};

export default () => {
  const weatherDay = new WeatherDay();
  weatherDay.render(data);
};
