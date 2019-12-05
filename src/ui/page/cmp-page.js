import Component from '../component';
// eslint-disable-next-line import/no-cycle
import Header from '../header/index';
import Main from '../main/index';

export default class Page extends Component {
  constructor(state) {
    super('#root');
    this.state = state;
  }

  render() {
    const html = `
    <div className="wrapper">
      <header class="header">
      </header>
      <main class="main"></main>
    </div>`;
    super.render(html);
    Header(this.state);
    Main(this.state);
  }
}
