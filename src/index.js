import './ui/index.scss';
import index from './ui/page';
import state from './store/state/state';

const init = () => {
  index(state);
};

window.addEventListener('DOMContentLoaded', init);
