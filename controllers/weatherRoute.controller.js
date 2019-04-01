const fetch = require('node-fetch');

exports.getForecast = (req, res, next) => {
  fetch('https://api.darksky.net/forecast/9a9a1e6cdaf634513a02835dae240b2e/37.8267,-122.4233')
  .then(res => res.json())
  .then(result => {
    console.log(result);
    return result;
  })
  .catch(err => console.log(err));
}