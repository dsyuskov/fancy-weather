/* eslint-disable import/no-cycle */
import Page from './cmp-page';

export default (state) => {
  const page = new Page(state);
  page.render();
};
