import WeatherDay from '../weatherDay/index';

export default class Main {
  constructor() {
    this.node = document.querySelector('.main');
  }

  init() {
    this.node.innerHTML = `
      <div class="weather">
        <div class="weather-day"></div>
        <div class="weather-forecast"></div>
      </div>
      <div class="geoposition></div>`;
    WeatherDay();
  }
}
