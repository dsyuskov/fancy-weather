/* eslint-disable import/no-cycle */
import Component from '../component';
import reducerCP from '../../store/reducers/controlPanel';
import { changeLang, changeUseCelsius } from '../../store/actions/controlPanel';

export default class ControlPanel extends Component {
  constructor(state) {
    super('.control-panel');
    this.state = state;
  }

  render() {
    const html = `
      <button class="button control-panel__update"></button>
      <select class="dropdown control-panel__lang">
        <option class="dropdown__item" value="en">en</option>
        <option class="dropdown__item" value="ru">ru</option>
      </select>
      <button class="button control-panel__faringate">&deg; F</button>
      <button class="button button--selected control-panel__celsius">&deg; C</button>`;
    super.render(html);
    this.addEvents();
  }

  addEvents() {
    const buttonLang = this.node.querySelector('.control-panel__lang');
    const buttonFaringate = this.node.querySelector('.control-panel__faringate');
    const buttonCelsius = this.node.querySelector('.control-panel__celsius');

    buttonLang.value = this.state.controlPanel.lang;

    if (this.state.controlPanel.isCelsius) {
      buttonFaringate.classList.remove('button--selected');
      buttonCelsius.classList.add('button--selected');
    } else {
      buttonFaringate.classList.add('button--selected');
      buttonCelsius.classList.remove('button--selected');
    }

    buttonLang.addEventListener('change', () => {
      reducerCP(changeLang(buttonLang.value));
      localStorage.setItem('lang', buttonLang.value);
    });

    buttonFaringate.addEventListener('click', () => {
      reducerCP(changeUseCelsius(false));
      localStorage.setItem('isCelsius', false);
    });

    buttonCelsius.addEventListener('click', () => {
      reducerCP(changeUseCelsius(true));
      localStorage.setItem('isCelsius', true);
    });
  }
}
