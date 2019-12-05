
// eslint-disable-next-line import/no-cycle
import Search from './cmp-search';

export default (state) => {
  const search = new Search(state);
  search.render();
};
