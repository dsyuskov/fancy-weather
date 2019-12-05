import Main from './cmp-main';

export default (state) => {
  const main = new Main(state);
  main.render();
};
