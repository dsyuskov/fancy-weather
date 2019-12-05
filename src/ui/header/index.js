/* eslint-disable import/no-cycle */
import Header from './cmp-header';

export default (className) => {
  const header = new Header(className);
  header.render();
};
