/* eslint-disable import/no-cycle */
import Component from '../component';
import reducerCP from '../../store/reducers/controlPanel';
import { changeSearchString } from '../../store/actions/controlPanel';
import translite from '../../utils/translite';

export default class Search extends Component {
  constructor(state) {
    super('.search');
    this.state = state;
  }

  render() {
    const html = `
      <form class="search__form">
        <input
          class="search__input"
          type="text"
          placeholder='${translite(this.state.controlPanel.lang, 'words', 'searchPlaceholder')}'
        />
        <button
          class="button search__button"
        >${translite(this.state.controlPanel.lang, 'words', 'search')}</button>
      </form>`;
    super.render(html);
    this.addEvents();
  }

  addEvents() {
    const searchForm = this.node.querySelector('.search__form');
    const input = this.node.querySelector('.search__input');

    searchForm.addEventListener('submit', (event) => {
      reducerCP(changeSearchString(input.value));
      event.preventDefault();
    });
  }
}
