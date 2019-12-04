import reducerCP from '../../store/reducers/controlPanel';
import { changeLang, changeUseCelsius } from '../../store/actions/controlPanel';
import state from '../../store/state/controlPanel';

export default class ControlPanel {
  constructor() {
    this.node = document.querySelector('.control-panel');
  }

  render() {
    this.node.innerHTML = `
      <button class="button control-panel__update"></button>
      <select class="dropdown control-panel__lang">
        <option class="dropdown__item" value="en">en</option>
        <option class="dropdown__item" value="ru">ru</option>
      </select>
      <button class="button control-panel__faringate">&deg; F</button>
      <button class="button button--selected control-panel__celsius">&deg; C</button>`;
    this.addEvents();
  }

  addEvents() {
    const buttonLang = this.node.querySelector('.control-panel__lang');
    const buttonFaringate = this.node.querySelector('.control-panel__faringate');
    const buttonCelsius = this.node.querySelector('.control-panel__celsius');
    buttonLang.value = state.lang;

    buttonLang.addEventListener('change', () => {
      reducerCP(changeLang(buttonLang.value));
      localStorage.setItem('lang', buttonLang.value);
    });

    buttonFaringate.addEventListener('click', () => {
      reducerCP(changeUseCelsius(false));
      buttonFaringate.classList.add('button--selected');
      buttonCelsius.classList.remove('button--selected');
      localStorage.setItem('isCelsius', false);
    });

    buttonCelsius.addEventListener('click', () => {
      reducerCP(changeUseCelsius(true));
      buttonCelsius.classList.add('button--selected');
      buttonFaringate.classList.remove('button--selected');
      localStorage.setItem('isCelsius', true);
    });
  }
}
