import Header from '../header/index';
import Main from '../main/index';

export default class Page {
  constructor() {
    this.node = document.getElementById('root');
  }

  render() {
    this.node.innerHTML = `
    <div className="wrapper">
      <header class="header">
      </header>
      <main class="main"></main>
    </div>`;
    Header();
    Main();
  }
}
