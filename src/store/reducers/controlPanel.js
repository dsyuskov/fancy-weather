import controlPanel from '../state/controlPanel';

import {
  CHANGE_LANG,
  CHANGE_USE_CELSIUS,
  CHANGE_SEARCH_STRING,
} from '../actions/controlPanel';

export default function (action) {
  switch (action.type) {
    case CHANGE_LANG: {
      controlPanel.lang = action.payload;
      break;
    }
    case CHANGE_USE_CELSIUS: {
      controlPanel.isCelsius = action.payload;
      break;
    }
    case CHANGE_SEARCH_STRING: {
      controlPanel.searchString = action.payload;
      break;
    }
    default:
  }
  console.log(controlPanel);
}
