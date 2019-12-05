/* eslint-disable import/no-cycle */
import Page from './cmp-page';

export default (className) => {
  const page = new Page(className);
  page.render();
};
