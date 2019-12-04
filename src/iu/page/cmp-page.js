export default class Page {
  constructor() {
    this.node = document.getElementById('root');
    this.init();
  }

  init() {
    this.node.innerHTML = `
    <div className="wrapper">
      <header className="header">
      </header>
      <main className="main">
      </main>
    </div>
    `;
  }
}
