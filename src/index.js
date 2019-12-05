import './ui/index.scss';
import index from './ui/page';
import { getState } from './store/state/state';

const init = () => {
  index(getState());
};

window.addEventListener('DOMContentLoaded', init);
