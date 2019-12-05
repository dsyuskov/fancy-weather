const state = {
  controlPanel: {
    lang: localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en',
    isCelsius: localStorage.getItem('isCelsius') ? localStorage.getItem('isCelsius') : 'true',
    searchString: '',
  },
};

export default state;
