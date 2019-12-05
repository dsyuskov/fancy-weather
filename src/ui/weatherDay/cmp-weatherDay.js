/* eslint-disable import/no-cycle */
import Component from '../component';
import { getState } from '../../store/state/state';
import translite from '../../utils/translite';
import { celsiusToFaringate /* , addSero */ } from '../../utils/utils';

export default class WeatherDay extends Component {
  constructor() {
    super('.weather-day');
    this.state = getState();
  }

  render() {
    const { weather, city } = this.state.weather;
    const { lang, isCelsius } = this.state.controlPanel;
    if (city) {
      const temp = isCelsius ? weather.temp : celsiusToFaringate(weather.temp);
      const feels = isCelsius ? weather.feels : celsiusToFaringate(weather.feels);
      const html = `
      <div class="weather-day__city">${this.state.weather.city.name}, ${this.state.weather.city.country}</div>
      <div class="weather-day__date-time">{this.state.currentDateTime}</div>
      <div class="weather-day__wrapper">
        <div class="weather-day__temp">
          <div class="weather-day__temp-value">${temp}</div>
          <div class="weather-day__temp-deg">&deg;</div>
        </div>
        <div class="weather-day__img">
          <img src="" alt=""></img>
        </div>
        <ul class="weather-day__more">
          <li class="weather-day__more-item">${translite(lang, 'weather', weather.id)}</li>
          <li class="weather-day__more-item">${translite(lang, 'words', 'feels')}: ${feels} &deg;</li>
          <li class="weather-day__more-item">${translite(lang, 'words', 'wind')}: ${weather.wind.speed} m/c</li>
          <li class="weather-day__more-item">${translite(lang, 'words', 'humidity')}: ${weather.humidity} %</li>
        </ul>
      </div>
    `;
      super.render(html);
    }
  }
}
