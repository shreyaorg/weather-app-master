import axios from 'axios';

// Open Weather API Config
const DARKSKY_APIKEY = '60abf209b1dd0449d335cc91592c72af';
const DARKSKY_API = 'http://localhost:8080/forecast';

const GOOGLE_GEOCODING_API = 'https://maps.googleapis.com/maps/api/geocode/json';
const GOOGLE_GEOCODING_API_KEY = 'AIzaSyCRxpVT14zVdBW5LEf7bkCUl1mqfVMlVFM';

const api = {
  getCurrentWeather(city) {
    return new Promise((resolve, reject) => {
      axios.get(GOOGLE_GEOCODING_API + '?components=postal_code:' + city + '&key=' + GOOGLE_GEOCODING_API_KEY)
      .then((res) => {
          const location = res.data.results[0].geometry.location;
          const currentUrl = DARKSKY_API + '/' + DARKSKY_APIKEY + '/' + location.lat + ',' + location.lng;
          axios.get(currentUrl)
           .then((res) => resolve(res.data))
           .catch((err) => reject(err));
      });
    });
  }
};

export default api;

