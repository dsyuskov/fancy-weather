/* eslint-disable import/no-cycle */
import {
  CHANGE_LANG,
  CHANGE_USE_CELSIUS,
  CHANGE_SEARCH_STRING,
} from '../actions/controlPanel';

import {
  // GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  // GET_WEATHER_FAILTURE,
} from '../actions/weather';

const initState = {
  lang: localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en',
  isCelsius: localStorage.getItem('isCelsius') ? localStorage.getItem('isCelsius') : 'true',
  searchString: '',
};


export default function (state = initState, action) {
  switch (action.type) {
    case CHANGE_LANG: {
      return {
        ...state,
        controlPanel: {
          ...state.controlPanel,
          lang: action.payload,
        },
      };
    }
    case CHANGE_USE_CELSIUS: {
      return {
        ...state,
        controlPanel: {
          ...state.controlPanel,
          isCelsius: action.payload,
        },
      };
    }
    case CHANGE_SEARCH_STRING: {
      return {
        ...state,
        controlPanel: {
          ...state.controlPanel,
          searchString: action.payload,
        },
      };
    }
    // case GET_WEATHER_REQUEST: {
    //   // state.weather = action.payload;
    //   break;
    // }
    // case GET_WEATHER_FAILTURE: {
    //   // state.weather = action.payload;
    //   break;
    // }
    case GET_WEATHER_SUCCESS: {
      return {
        ...state,
        weather: action.payload,
      };
    }
    default:
  }
  return state;
}
