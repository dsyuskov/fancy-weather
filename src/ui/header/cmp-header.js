import ControlPanel from '../controlPanel';
import Search from '../search';

export default class Header {
  constructor() {
    this.node = document.querySelector('.header');
  }

  init() {
    this.node.innerHTML = `
      <div class="control-panel"></div>
      <div class="search"></div>
    `;
    ControlPanel();
    Search();
  }
}
