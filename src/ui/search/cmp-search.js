import reducerCP from '../../store/reducers/controlPanel';
import { changeSearchString } from '../../store/actions/controlPanel';
import translite from '../../utils/translite';

export default class Search {
  constructor() {
    this.node = document.querySelector('.search');
  }

  render(lang = 'en') {
    this.node.innerHTML = `
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
