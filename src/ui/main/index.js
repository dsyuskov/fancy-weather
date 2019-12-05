/* eslint-disable import/no-cycle */
import Main from './cmp-main';

export default (className) => {
  const main = new Main(className);
  main.render();
};
