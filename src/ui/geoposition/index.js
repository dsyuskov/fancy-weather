/* eslint-disable import/no-cycle */
import Geoposition from './cmp-geoposition';

export default (className) => {
  const geoposition = new Geoposition(className);
  geoposition.render();
};
