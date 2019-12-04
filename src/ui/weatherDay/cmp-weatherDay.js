export default class WeatherDay {
  constructor() {
    this.node = document.querySelector('.weather-day');
  }

  render(weather) {
    this.node.innerHTML = `
      <div class="weather-day__city">${weather.city.name}, ${weather.city.country}</div>
      <div class="weather-day__date-time">{ this.state.currentDateTime }</div>
      <div class="weather-day__wrapper">
        <div class="weather-day__temp">
          <div class="weather-day__temp-value">{ temp }</div>
          <div class="weather-day__temp-deg">&deg;</div>
        </div>
        <div class="weather-day__img">
          <img src="" alt=""></img>
        </div>
        <ul class="weather-day__more">
          <li class="weather-day__more-item">{ translite(this.props.lang,'weather', weather.weather.id) }</li>
          <li class="weather-day__more-item">{ translite(this.props.lang,'words', 'feels') }: { feels } &deg;</li>
          <li class="weather-day__more-item">{ translite(this.props.lang,'words', 'wind') }: { weather.weather.wind.speed } m/c</li>
          <li class="weather-day__more-item">{ translite(this.props.lang,'words', 'humidity') }: { weather.weather.humidity } %</li>
        </ul>
      </div>
    `;
  }
}
