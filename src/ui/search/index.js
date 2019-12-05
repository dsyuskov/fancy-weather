
import Search from './cmp-search';

export default (state) => {
  const search = new Search(state);
  search.render();
};
