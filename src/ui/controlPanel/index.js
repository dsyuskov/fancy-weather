/* eslint-disable import/no-cycle */
import ControlPanel from './cmp-controlPanel';

export default (state) => {
  const controlPanel = new ControlPanel(state);
  controlPanel.render();
};
