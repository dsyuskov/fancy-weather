/* eslint-disable import/no-cycle */
import Header from './cmp-header';

export default (state) => {
  const header = new Header(state);
  header.render();
};
