/* eslint-disable import/no-cycle */
import Component from '../component';
// import { getState } from '../../store/state/state';
// import translite from '../../utils/translite';
// import { celsiusToFaringate /* , addSero */ } from '../../utils/utils';

export default class WeatherForecast extends Component {
  render() {
    // const { lang, forecast, isCelsius } = props;
    // const temp = isCelsius ? forecast.temp : celsiusToFaringate(forecast.temp);
    const html = `
      <div className="weather-forecast__day">
        <div className="weather-forecast__weekday">{ translite(lang, 'fullDayName', forecast.weekDay) }</div>
        <div className="weather-forecast__temp">{ temp }&deg;</div>
        <div className="weather-forecast__img">
          <img src="" alt="">
        </div>
      </div>
      <div className="weather-forecast__day">
        <div className="weather-forecast__weekday">{ translite(lang, 'fullDayName', forecast.weekDay) }</div>
        <div className="weather-forecast__temp">{ temp }&deg;</div>
        <div className="weather-forecast__img">
          <img src="" alt="">
        </div>
      </div>
      <div className="weather-forecast__day">
        <div className="weather-forecast__weekday">{ translite(lang, 'fullDayName', forecast.weekDay) }</div>
        <div className="weather-forecast__temp">{ temp }&deg;</div>
        <div className="weather-forecast__img">
          <img src="" alt="">
        </div>
      </div>`;
    super.render(html);
  }
}
