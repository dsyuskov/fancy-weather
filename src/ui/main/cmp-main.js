import Component from '../component';
import WeatherDay from '../weatherDay/index';

export default class Main extends Component {
  constructor(state) {
    super('.main');
    this.state = state;
  }

  render() {
    const html = `
      <div class="weather">
        <div class="weather-day"></div>
        <div class="weather-forecast"></div>
      </div>
      <div class="geoposition></div>`;
    super.render(html);
    WeatherDay(this.state);
  }
}
