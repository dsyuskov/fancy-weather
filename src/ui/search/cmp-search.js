/* eslint-disable import/no-cycle */
import Component from '../component';
import { getState, dispatch } from '../../store/state/state';
import { changeSearchString } from '../../store/actions/controlPanel';
import translite from '../../utils/translite';
import { getWeatherByCity } from '../../store/actions/weather';

export default class Search extends Component {
  render() {
    const { lang } = getState().controlPanel;
    const html = `
      <form class="search__form">
        <input
          class="search__input"
          type="text"
          placeholder='${translite(lang, 'words', 'searchPlaceholder')}'
        />
        <button
          class="button search__button"
        >${translite(lang, 'words', 'search')}</button>
      </form>`;
    super.render(html);
    this.addEvents();
  }

  addEvents() {
    const searchForm = this.node.querySelector('.search__form');
    const input = this.node.querySelector('.search__input');

    searchForm.addEventListener('submit', (event) => {
      dispatch(changeSearchString(input.value));
      getWeatherByCity(input.value);
      event.preventDefault();
    });
  }
}
