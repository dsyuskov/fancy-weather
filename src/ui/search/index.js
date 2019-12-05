// eslint-disable-next-line import/no-cycle
import Search from './cmp-search';

export default (className) => {
  const search = new Search(className);
  search.render();
};
