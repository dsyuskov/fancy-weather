/* eslint-disable import/no-cycle */
import ControlPanel from './cmp-controlPanel';

export default (className) => {
  const controlPanel = new ControlPanel(className);
  controlPanel.render();
};
