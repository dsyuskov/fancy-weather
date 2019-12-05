/* eslint-disable import/no-cycle */
import state from '../state/state';
import Page from '../../ui/page/index';

import {
  CHANGE_LANG,
  CHANGE_USE_CELSIUS,
  CHANGE_SEARCH_STRING,
} from '../actions/controlPanel';

export default function (action) {
  switch (action.type) {
    case CHANGE_LANG: {
      state.controlPanel.lang = action.payload;
      break;
    }
    case CHANGE_USE_CELSIUS: {
      state.controlPanel.isCelsius = action.payload;
      break;
    }
    case CHANGE_SEARCH_STRING: {
      state.controlPanel.searchString = action.payload;
      break;
    }
    default:
  }
  console.log(state);
  Page(state);
}
