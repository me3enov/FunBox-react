class Api {
  constructor(config) {
    this.HEADERS = config.HEADERS;
    this.URL = config.URL;
    this.DATA_URL = config.DATA_URL;
    this.CAT_FOOD = config.CAT_FOOD;
    this.NYMUSHKA = config.NYMUSHKA;
    this.ERROR_TEXT = config.ERROR_TEXT;
  }

  // get user info
  getFoodItems() {
    return fetch(`${this.URL}${this.NYMUSHKA}`, {
      headers: this.HEADERS,
    })
      .then(this.checkServerResponse);
  }

  // check response from server
  checkServerResponse(res) {
    if (!res.ok) {
      return Promise.reject(new Error(`${this.ERROR_TEXT} ${res.status}`));
    }
    return res.json();
  }
}

const api = new Api({
  HEADERS: {
    'Content-Type': 'application/json',
    "'Accept'": 'application/json',
  },
  URL: '',
  NYMUSHKA: 'texts/nymushka.json',
  ERROR_TEXT: 'ERROR: ',
});

export default api;
